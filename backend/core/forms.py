from django import forms

class ExcelUploadForm(forms.Form):
    file = forms.FileField(label='Select an Excel file')
    
    def clean_file(self):
        file = self.cleaned_data['file']
        if not file.name.endswith(('.xls', '.xlsx')):
            raise forms.ValidationError('Only .xls or .xlsx files are allowed.')
        return file
