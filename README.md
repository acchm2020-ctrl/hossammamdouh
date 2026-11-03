# Hossam Mamdouh: Portfolio Website

A static, bilingual (Arabic / English) portfolio site. Plain HTML, CSS and JavaScript.
**No build step, no npm, no framework.** The files in this folder are the finished website.

## Folder contents

| Path | Purpose |
| --- | --- |
| `index.html` | The website (entry point) |
| `404.html` | "Page not found" page (GitHub Pages uses it automatically) |
| `assets/css/style.css` | All styles, including self-hosted fonts |
| `assets/js/main.js` | Language switch (عربي / English) and "Copy email" button |
| `assets/img/hossam-mamdouh.jpg` | Profile photo |
| `assets/img/og-image.jpg` | Preview image shown when the link is shared on LinkedIn or WhatsApp (1200×630) |
| `assets/fonts/` | Montserrat and IBM Plex Sans Arabic (SIL Open Font License, licences included) |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser and phone icons |
| `robots.txt`, `sitemap.xml` | Search-engine files |
| `.nojekyll` | Tells GitHub Pages to publish the files as they are (hidden file, keep it) |

## Step 1: Replace the placeholder address (required)

The address `https://YOUR-GITHUB-USERNAME.github.io/` appears in **3 files**:
`index.html`, `robots.txt` and `sitemap.xml`.

Replace it with your real site address:

- Repository named **`USERNAME.github.io`** (recommended, shortest link):
  `https://USERNAME.github.io/`
- Any other repository name, for example `portfolio`:
  `https://USERNAME.github.io/portfolio/`

Keep the slash at the end. Without this step the site still works, but the LinkedIn link preview will show no image.

## Step 2: Publish on GitHub Pages (free)

1. Sign in at github.com (create a free account if needed).
2. Click **New repository**. Name it `USERNAME.github.io` (your exact username), set it to **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip the ZIP on your computer, open the folder, select **everything inside it** (not the folder itself) and drag it into the upload area. Click **Commit changes**.
   - On Windows, `.nojekyll` may be hidden. If it doesn't upload, click **Add file › Create new file**, name it `.nojekyll`, leave it empty and commit. The site works without it, but it's safer to include.
5. Go to **Settings › Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
6. Wait 1–3 minutes, then open `https://USERNAME.github.io/`.

## Step 3: Connect it to LinkedIn

1. Profile › edit (pencil) on the top card › **Custom button** › **View my portfolio**.
2. Paste your GitHub Pages address.
3. Check the share preview at https://www.linkedin.com/post-inspector/ (paste your link). If an old preview appears, click **Inspect** again to refresh it.

## Updating the site later

Edit the file on GitHub (open it and click the pencil icon) or upload the new version with the same name. Changes go live within a few minutes.

- Text: `index.html`. Each section has an Arabic block (`class="ar"`) and an English block (`class="en"`). Update both.
- Photo: replace `assets/img/hossam-mamdouh.jpg` with a square photo of the same name.

---

# دليل النشر بالعربية

الملفات في هذا المجلد هي الموقع النهائي جاهزًا للرفع، **ولا تحتاج أي خطوة بناء أو برامج إضافية**.

1. **استبدل العنوان المؤقت:** ابحث عن `https://YOUR-GITHUB-USERNAME.github.io/` في الملفات الثلاثة `index.html` و`robots.txt` و`sitemap.xml`، واستبدله بعنوانك الحقيقي، مثل `https://USERNAME.github.io/`. بدون هذه الخطوة يعمل الموقع، لكن معاينة الرابط في LinkedIn لن تظهر صورتها.
2. **أنشئ مستودعًا على GitHub** باسم `USERNAME.github.io` (اسم المستخدم الخاص بك تمامًا)، واجعله **Public**.
3. **ارفع محتويات المجلد** (وليس المجلد نفسه) من خلال **uploading an existing file**، ثم **Commit changes**.
4. من **Settings › Pages** اختر **Deploy from a branch**، والفرع **main**، والمجلد **/ (root)**، ثم **Save**.
5. بعد دقيقة إلى ثلاث دقائق، افتح `https://USERNAME.github.io/`، ثم ضع الرابط في زر **View my portfolio** على LinkedIn.
