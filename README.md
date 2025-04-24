# SATeLite: AI-Powered Fiscal Intelligence Platform

## Project Documentation

---

## 1. Vision & Idea

**SATeLite** is a cloud-native platform that automates fiscal compliance, provides AI-powered financial diagnostics, and detects fraud for SMEs and accountants. The platform is designed to adapt to various countries' regulations, starting with Mexico/SAT.

**Main Objectives:**
- Automate SAT (Mexican tax authority) compliance for SMEs and accountants.
- Use AI for financial health diagnostics and fraud detection.
- Deliver a seamless, secure, and scalable user experience.
- Be easily extensible to other fiscal environments.

---

## 2. System Architecture

- **Frontend:** React.js (Vite, TailwindCSS, shadcn/ui), deployed via AWS Amplify.
- **Backend:** Python microservices (AWS Lambda), API Gateway, Step Functions, Textract, Comprehend, SageMaker.
- **Data:** DynamoDB, PostgreSQL (RDS), S3 for document storage.
- **Authentication:** Amazon Cognito.
- **CI/CD & Hosting:** AWS Amplify.
- **Security:** IAM, KMS, Macie, WAF.

**Architecture References:**
- [System Architecture Diagram](https://lucid.app/lucidchart/ea0793d6-fdd8-4be9-b4ae-1c344f91e0d4/edit?viewport_loc=-147%2C-4%2C2101%2C1100%2C0_0&invitationId=inv_63f340d3-d065-4369-b0c1-54c49f581302)
- [Flow Diagram](https://lucid.app/lucidchart/8ea6076e-6e39-49a7-a3b3-483a108a0450/edit?viewport_loc=-1266%2C-68%2C4882%2C2151%2C0_0&invitationId=inv_30002f66-bcdc-4b0e-992d-529d97c26543)

---

## 3. Technology Stack

### Frontend
| Technology      | Purpose                       |
|----------------|-------------------------------|
| React.js (Vite)| Web Interface                 |
| TailwindCSS    | Styling Framework             |
| shadcn/ui      | Modern UI Components          |
| react-dropzone | File Uploads                  |
| AWS Amplify    | Hosting + CI/CD               |
| Amazon Cognito | Authentication                |

### Backend
| AWS Service    | Purpose                       |
|----------------|-------------------------------|
| API Gateway    | API REST/GraphQL              |
| Lambda         | Python Microservices           |
| Step Functions | Workflow Orchestration         |
| Textract       | OCR for invoices/receipts      |
| Comprehend     | NLP for classification         |
| SageMaker      | Custom ML models               |
| DynamoDB       | NoSQL (transactions)           |
| RDS PostgreSQL | Structured data                |
| S3             | Document storage               |

### Security & Monitoring
| Service        | Purpose                        |
|----------------|-------------------------------|
| IAM            | Role management                |
| KMS            | Key management                 |
| Macie          | Sensitive data detection       |
| WAF            | Web application firewall       |

---

## 4. Development Process

### 4.1. Planning & Design
- **User Stories:**
  - SMEs upload fiscal documents for instant AI analysis.
  - Accountants manage multiple clients and compliance.
- **Wireframes & UI:**
  - Designed in Figma, focusing on clarity and accessibility.
- **Component Structure:**
  - Modular, with pages for onboarding, dashboard, document upload, AI processing, classification, and declaration.

### 4.2. Frontend Implementation
- **Key Pages/Flows:**
  - **Auth:** `/login`, `/signup` — secure login, registration, forgot password.
  - **Onboarding:** Guided onboarding for both accountants and SMEs.
  - **Dashboard:** Main workspace, with tabs for document upload, analysis, SAT reports, and settings.
  - **Document Upload:** Drag-and-drop interface, supports XML, PDF, XLSX.
  - **AI Processing:** Triggers backend AI/ML workflows, displays results (deductions, errors, alerts).
  - **Classification:** NLP-based categorization of transactions.
  - **Declaration:** Generates and allows download of tax declarations, with notification options.
- **Routing:** Centralized in `/src/routes/AppRoutes.jsx`.

### 4.3. Backend Implementation
- **Stack:** Python (FastAPI/Flask for local dev), AWS Lambda for serverless deployment.
- **AI/ML:** Textract for OCR, Comprehend for NLP, SageMaker for custom ML.
- **Endpoints:** `/upload`, `/analyze`, `/classify`, `/declaration`.
- **Security:** Cognito JWT tokens, data encryption.

### 4.4. Integrations & AI/ML
- **Textract:** Extracts data from invoices/receipts.
- **Comprehend:** Classifies and tags transactions.
- **SageMaker:** Custom models for fraud detection and financial health scoring.

### 4.5. Testing
- **Frontend:** Jest, React Testing Library.
- **Backend:** Unit/integration tests for API and ML pipeline.

### 4.6. Deployment
- **Frontend:** AWS Amplify (CI/CD from GitHub).
- **Backend:** Lambda functions via AWS SAM/Serverless Framework.
- **Database:** DynamoDB and RDS via CloudFormation.

---

## 5. Codebase Structure

```
talent-hackathon-2025/
│
├── backend/
│   ├── api/                # API endpoints (Python, Flask/FastAPI)
│   ├── core/               # Core business logic
│   ├── requirements.txt    # Python dependencies
│   ├── manage.py           # Entrypoint for dev
│   └── tests/              # Backend tests
│
├── frontend/
│   ├── public/             # Static assets (logo, etc.)
│   ├── src/
│   │   ├── assets/         # Images, icons
│   │   ├── components/     # Shared React components (UI, Button, etc.)
│   │   ├── pages/          # Page-level React components
│   │   │   ├── accountant/
│   │   │   ├── auth/
│   │   │   ├── cassification/
│   │   │   ├── declaration/
│   │   │   ├── login/
│   │   │   ├── process/
│   │   │   ├── pymes/
│   │   │   └── singup/
│   │   ├── routes/         # AppRoutes.jsx (routing config)
│   │   ├── utils/          # Helper functions
│   │   └── main.jsx        # App entrypoint
│   ├── package.json        # JS dependencies
│   └── tailwind.config.js  # TailwindCSS config
│
├── README.md               # Project documentation
└── ...                     # CI/CD, infra, etc.
```

---

## 6. Key Features & User Flows

### 6.1. Authentication & Onboarding
- Secure login/registration using Cognito.
- Role-based onboarding for accountants and SMEs.

### 6.2. Document Upload & Processing
- Drag-and-drop upload for XML, PDF, XLSX.
- Files sent to backend, stored in S3.
- AI pipeline extracts, analyzes, and classifies data.

### 6.3. Analysis & Reporting
- Real-time display of deductions, errors, and SAT alerts.
- Quick summaries and detailed reports.
- Classification of transactions using NLP.

### 6.4. Tax Declaration
- Generate tax declarations from processed data.
- Download as PDF.
- Option to notify via SMS.

---

## 7. Prototype & Demo

- **Frontend:**
  - Fully navigable UI with simulated AI analysis and declaration flows.
  - Responsive, modern design using Tailwind and shadcn/ui.
- **Backend:**
  - Simulated endpoints for AI/ML analysis.
  - Ready for integration with AWS services.
- **Testing:**
  - Manual and automated tests for critical flows.

---

## 8. How to Run Locally

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
python manage.py runserver
```

---

## 9. Next Steps

- Integrate real AWS AI/ML services.
- Expand multi-country compliance support.
- Add dashboard analytics and admin panel.
- Enhance security and monitoring.

---

## 10. Contributors

- AWSome Team

---

For further technical details, see architecture diagrams and code comments, or contact the development team.

| CloudWatch      | Logs                         |
| X-Ray           | Tracing de ejecuciones       |
| Cost Explorer   | Optimización                 |


