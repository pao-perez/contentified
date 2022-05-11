<h1 align="center">
  Contentified
</h1>

## Quick start

**Develop**

```shell
npm run develop
```
Your site is now running at http://localhost:8000

**Build**

```shell
npm run build --environment={ENV}
```

**Local Firebase Deploy**

```shell
npm run local-deploy --environment={ENV}
```
Your site is now running at http://localhost:5000

**Firebase Deploy**

```shell
npm run deploy --environment={ENV}
```
Your site is now running at [https://{ENV}-contentified.web.app](https://{ENV}-contentified.web.app)

## Notes
**Deployment to Firebase**
Make sure you're login prior deployment:
```shell
firebase login
```

If you encounter a 401 error in Firebase even when already logged in, log-out and log back in or re-authenticate:
```shell
firebase login --reauth
```

### Built with Gatsby
- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
