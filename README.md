# Vybee — Full-Stack Social Media Platform

A feature-rich social media web application inspired by Instagram — with posts, stories, loops (short videos), real-time messaging, notifications, and more.

**Live Demo:** [https://social-media-1-bu2v.onrender.com](https://social-media-1-bu2v.onrender.com)

**Stack:** React · Redux · Node.js · Express · MongoDB · Socket.io · Cloudinary · JWT · Multer · Render

---

## What is Vybee?

Vybee is a full-stack social media platform where users can share photos and videos, post 24-hour stories, create short loop videos (like Reels), chat with friends in real-time, follow other users, and stay updated with notifications — all in a clean, responsive interface.

---

## Features

### Posts & Media
- Upload and share photos and videos
- Like and interact with posts
- Feed showing posts from followed users
- Cloudinary for optimized media storage and delivery

### Stories
- 24-hour disappearing stories
- Story display with profile picture ring indicator
- View stories from people you follow

### Loops
- Short-form videos (similar to Instagram Reels)
- Dedicated Loops feed and player
- VideoPlayer component for smooth playback

### Real-time Messaging
- Direct messages between users
- Real-time delivery via Socket.io
- Sender and receiver message UI components
- Message area with conversation history

### Social
- Follow and unfollow users
- User search
- View other user profiles
- Online user status indicator (via Socket.io)
- Notifications for follows, likes, and messages

### User Account
- Register and login with JWT authentication
- Edit profile (name, bio, avatar)
- Forgot password flow
- Protected routes — only logged-in users can access content
- Upload profile picture via Multer + Cloudinary

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React.js, Redux Toolkit, Vite |
| Styling | CSS Modules |
| State Management | Redux (postSlice, messageSlice, loopSlice, storySlice, userSlice, socketSlice) |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Real-time | Socket.io |
| Media Storage | Cloudinary + Multer |
| Auth | JWT (JSON Web Tokens) |
| Deployment | Render (backend + frontend) |

---

## Project Structure

```
Social-Media/
├── backend/
│   ├── config/                      # DB and Cloudinary config
│   ├── controllers/
│   │   ├── auth.controllers.js      # Register, login, forgot password
│   │   ├── user.controllers.js      # Profile, follow, search
│   │   ├── post.controllers.js      # Create, delete, like posts
│   │   ├── story.controllers.js     # Upload, view stories
│   │   ├── loop.controllers.js      # Short video loops
│   │   └── message.controllers.js  # Direct messages
│   ├── middlewares/
│   │   ├── isAuth.js                # JWT auth middleware
│   │   └── multer.js                # File upload middleware
│   ├── models/
│   │   ├── user.model.js
│   │   ├── post.model.js
│   │   ├── story.model.js
│   │   ├── loop.model.js
│   │   ├── message.model.js
│   │   ├── conversation.model.js
│   │   └── notification.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── post.routes.js
│   │   ├── story.routes.js
│   │   ├── loop.routes.js
│   │   └── message.routes.js
│   ├── socket.js                    # Socket.io setup
│   └── index.js                     # Express server entry
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Feed.jsx
│   │   │   ├── Post.jsx
│   │   │   ├── StoryCard.jsx
│   │   │   ├── StoryDp.jsx
│   │   │   ├── LoopCard.jsx
│   │   │   ├── VideoPlayer.jsx
│   │   │   ├── SenderMessage.jsx
│   │   │   ├── ReceiverMessage.jsx
│   │   │   ├── NotificationCard.jsx
│   │   │   ├── OnlineUser.jsx
│   │   │   ├── FollowButton.jsx
│   │   │   ├── OtherUser.jsx
│   │   │   ├── Nav.jsx
│   │   │   ├── LeftHome.jsx
│   │   │   └── RightHome.jsx
│   │   ├── hooks/
│   │   │   ├── getAllPost.jsx
│   │   │   ├── getAllLoops.jsx
│   │   │   ├── getAllStories.jsx
│   │   │   └── getAllNotifications.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── EditProfile.jsx
│   │   │   ├── Messages.jsx
│   │   │   ├── MessageArea.jsx
│   │   │   ├── Loops.jsx
│   │   │   ├── Story.jsx
│   │   │   ├── Notifications.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── Upload.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── ForgotPassword.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── userSlice.js
│   │   │   ├── postSlice.js
│   │   │   ├── messageSlice.js
│   │   │   ├── loopSlice.js
│   │   │   ├── storySlice.js
│   │   │   └── socketSlice.js
│   │   └── App.jsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Cloudinary account

### Installation

```bash
git clone https://github.com/Sai2960/Social-Media.git
cd Social-Media
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## API Routes

| Route | Method | Description |
| --- | --- | --- |
| `/api/auth/register` | POST | Register new user |
| `/api/auth/login` | POST | Login, returns JWT |
| `/api/auth/forgot-password` | POST | Forgot password flow |
| `/api/user/:id` | GET | Get user profile |
| `/api/user/follow/:id` | POST | Follow a user |
| `/api/user/search` | GET | Search users |
| `/api/post` | GET/POST | Get feed / create post |
| `/api/post/:id/like` | PUT | Like a post |
| `/api/story` | GET/POST | Get / upload story |
| `/api/loop` | GET/POST | Get / upload loop video |
| `/api/message/:id` | GET/POST | Get / send messages |

---

## Real-time Features (Socket.io)

- **Online status** — users appear as online when connected
- **Instant messaging** — messages delivered in real-time without page refresh
- **Live notifications** — follow and like notifications pushed instantly

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with React · Node.js · Socket.io · Deployed on Render*
