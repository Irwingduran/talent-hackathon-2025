from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from django.conf import settings
import pandas as pd
from .forms import ExcelUploadForm

@api_view(['GET'])
def api_root(request):
    return Response({
        'message': 'Welcome to the Augmented Tax Intelligence API',
        'endpoints': {
            'excel-upload': '/api/upload-excel/'
        }
    })

from .models import Transaction

class ExcelUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, format=None):
        form = ExcelUploadForm(request.POST, request.FILES)
        if form.is_valid():
            excel_file = form.cleaned_data['file']
            try:
                df = pd.read_excel(excel_file)
                required_columns = ['date', 'description', 'amount']
                missing_cols = [col for col in required_columns if col not in df.columns]
                if missing_cols:
                    return Response({'success': False, 'error': f'Missing columns: {missing_cols}'}, status=status.HTTP_400_BAD_REQUEST)
                created = 0
                errors = []
                for idx, row in df.iterrows():
                    try:
                        transaction = Transaction(
                            date=pd.to_datetime(row['date']).date(),
                            description=str(row['description']),
                            amount=float(row['amount']),
                            account=row.get('account', None),
                            category=row.get('category', None),
                        )
                        transaction.save()
                        created += 1
                    except Exception as e:
                        errors.append({'row': idx+1, 'error': str(e)})
                preview = df.head(10).to_dict(orient='records')
                return Response({
                    'success': True,
                    'created': created,
                    'errors': errors,
                    'preview': preview,
                    'columns': list(df.columns)
                }, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'success': False, 'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'success': False, 'errors': form.errors}, status=status.HTTP_400_BAD_REQUEST)
