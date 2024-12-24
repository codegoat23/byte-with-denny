# byte-with-denny


This repository contains the codebase for a Blog Content Management System (CMS) built using ReactJS for the frontend. The CMS is integrated with Google Sheets to manage and fetch blog content seamlessly.

## Features

- **CMS Functionality**: Easily create, update, and manage blog posts through a user-friendly interface.
- **Google Sheets Integration**: Blog data is fetched and updated directly from a connected Google Sheet.
- **ReactJS Frontend**: A dynamic and responsive frontend built with ReactJS.
- **Loading Effects**: Smooth loading animations integrated using Universe UI for a polished user experience.
- **GitHub Repository**: Centralized version control and collaboration.

## Getting Started

### Prerequisites

- Node.js and npm installed
- A Google account with access to Google Sheets API
- Git installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Google Sheets integration:
   - Enable the Google Sheets API in your Google Cloud Console.
   - Download your API credentials (JSON file) and save it in the project root.
   - Configure your `.env` file:
     ```env
     REACT_APP_GOOGLE_SHEET_ID=your_google_sheet_id
     REACT_APP_GOOGLE_API_KEY=your_google_api_key
     ```

4. Run the development server:
   ```bash
   npm start
   ```

### Deployment

To deploy your CMS, build the project and host it on your preferred platform (e.g., Vercel, Netlify, or GitHub Pages):

```bash
npm run build
```

## Usage

1. Add or update blog content in your connected Google Sheet.
2. The CMS will fetch the updated content automatically.
3. Access the CMS at `http://localhost:3000` during development or your deployed URL.

## Future Enhancements

- **Authentication**: Secure access to the CMS.
- **Enhanced UI/UX**: More customization options and features.
- **Advanced Data Visualization**: Insights and analytics for blog performance.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

