# Weiwei Guo — Portfolio

Personal portfolio website built with React and Vite.

Live: [weiwei.dev](https://weiwei.dev)

---

## Tech Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | React, Vite             |
| Styling  | CSS                     |
| Email    | EmailJS                 |
| Hosting  | Vercel                  |

---

## Deployment

### Portfolio — Vercel

The frontend is static files (HTML/JS/CSS). Vercel is purpose-built for this — free, and automatically redeploys on every push to `main`.
Custom domain `weiwei.dev` configured via Namecheap DNS.

### Flower Shop — Render

- **Local**: Django's built-in dev server (`manage.py runserver`).
- **Production**: Django requires a production-grade server. **Render** provides a free Web Service that runs Django via **gunicorn** (a WSGI server).

**Database — SQLite locally, PostgreSQL in production**

- **Local**: **SQLite**, works fine for development, no setup required.
- **Production**: On Render, the file system is wiped on every redeploy, so SQLite data would be lost. **PostgreSQL** is a separate database service — data lives independently of the server and persists across deployments. Provided by Render, connected via `DATABASE_URL` environment variable.

**Static files — WhiteNoise**

- **Local**: Django's built-in dev server serves static files automatically in development mode.
- **Production**: In production, Django cannot serve static files on its own. **WhiteNoise** middleware handles this directly, without needing a separate web server like Nginx.

**Media files — Cloudinary**
- **Local**: User-uploaded media files (e.g. product photos) are stored in the local `media/` directory.
- **Production**: Render's file system is wiped on every redeploy, so locally stored media would be lost. **Cloudinary** is a cloud storage service — uploaded files are stored externally and remain available regardless of redeployments. Configured via environment variables.

**Payments — Stripe Webhook**
After a user completes payment on Stripe's hosted checkout page, Stripe sends a POST request (webhook) to the server to confirm payment. The server then updates the order status, clears the cart, and sends a confirmation email. Without the webhook, the server would never know the payment succeeded.

- **Local**: Stripe CLI (`stripe listen`) forwards webhook events to `localhost` and generates a temporary webhook secret.
- **Production**: A webhook endpoint is registered in the Stripe Dashboard pointing to the live server URL, and Stripe issues a permanent webhook secret stored as an environment variable on Render.

### Yoga Flow — Vercel (Static Export)

WordPress does not run on Vercel. The site was exported to static HTML/CSS/JS using the **Simply Static** plugin, then deployed to Vercel the same way as the portfolio.

---

## Projects

- [Flower Shop](https://flowerstore-xcmf.onrender.com) — Full-stack Django e-commerce app
- [Yoga Flow](https://yogaflow-static.vercel.app) — Custom WordPress theme
- [Issue Tracker](https://github.com/vickihi/issue-tracker-react) — React + Django REST API
