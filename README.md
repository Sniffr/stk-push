# SoldOut Africa Payment Frontend

A React frontend application for initializing M-Pesa payments through the SoldOut Africa API.

## Features

- Clean, modern UI with responsive design
- Form validation for all required fields
- Real-time API integration with SoldOut Africa payment endpoint
- Error handling and success feedback
- Mobile-friendly design

## Required Fields

- **Account Number**: The account identifier
- **Amount**: Payment amount in KES
- **Phone Number**: M-Pesa registered phone number (format: 254XXXXXXXXX)
- **Event Name**: Name of the event

## Constants

- **Channel**: Always set to "mpesa"
- **Authorization**: Pre-configured Basic Auth header

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Endpoint

The application makes POST requests to:
```
https://api.soldoutafrica.com/api/v1/payments/intialize
```

## Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.
