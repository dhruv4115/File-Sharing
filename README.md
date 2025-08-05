

# 📁 File Sharing Web Application

A full-stack file sharing and transfer platform where users can securely upload files, generate shareable links (with URL shortener), set file expiry, apply domain-based access, and protect files with passwords.

---

## 🌟 Features

✅ Upload and store files  
✅ Generate short shareable links  
✅ Set file expiry time (hours/days)  
✅ Email files directly to recipients  
✅ Protect files with passwords  
✅ Domain-specific access (e.g. `@mnnit.ac.in`)  
✅ Access-level selection: View / Download  
✅ JWT-based Authentication  
✅ Role-Based Access Control (RBAC)  
✅ File size/type restrictions  
✅ File compression (zip) before download *(optional)*

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS *(Planned)*
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT
- **File Handling**: Multer
- **Email Service**: Nodemailer
- **Short Links**: Custom URL Shortener
- **Hosting**: *(To be added)*

---

## 📂 Project Structure

```bash
file-sharing-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── uploads/
│   ├── config/
│   ├── .env
│   └── server.js
└── frontend/  # (coming soon)
```
 ---

## ⚙️ How to Run Locally

```bash
   git clone https://github.com/dhruv4115/File-Sharing-application.git
   cd file-sharing-app/backend
   npm install
```
   🔧 Create a .env file in the /backend directory:

    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_random_secret_key
    ```
     🚀 Start the server:
        ```bash
        npm run dev
        ```

## ✅ TODO

- [x] Setup backend project structure
- [x] Connect to MongoDB
- [x] Setup JWT-based authentication
- [x] Implement Role-Based Access Control (RBAC)
- [x] Add file upload feature with Multer
- [x] Generate short shareable URLs for files
- [x] Set file expiry and access permissions
- [ ] Implement password protection for downloads
- [ ] Add domain-based and access-level control
- [ ] Integrate email-based sharing
- [x] Add file type and size restrictions
- [ ] Enable optional file compression before download
- [ ] Build frontend UI in React with Tailwind CSS
- [ ] Deploy on cloud (Render/Vercel + MongoDB Atlas)
---

## 📬 Feedback

Have suggestions or questions?

- Create an [issue](https://github.com/dhruv4115/File-Sharing-application/issues)
- Connect with me on [LinkedIn](https://www.linkedin.com/in/dhruv-kumar-tiwari-359a431aa/) 
- Or drop me an email: `tiwaridhruv4146@gmail.com`

If you find this project useful, a ⭐️ would mean a lot!
