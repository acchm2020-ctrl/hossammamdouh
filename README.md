# Hossam Mamdouh: Portfolio Website

Live address: https://acchm2020-ctrl.github.io/hossammamdouh/

Plain HTML, CSS and JavaScript. **No build step.** These files are the finished website.
**Every file sits in the repository root. There are no folders.**

## Files that must be in the repository root (23 files)

| File | Purpose |
| --- | --- |
| `index.html` | The page |
| `style.css` | All design and layout (without it the page shows as plain text) |
| `main.js` | Arabic / English switch and "Copy email" button |
| `hossam-mamdouh.jpg` | Profile photo |
| `og-image.jpg` | Preview image when the link is shared on LinkedIn or WhatsApp |
| `montserrat-latin-400-normal.woff2`, `-500-`, `-600-` | English font (3 files) |
| `ibm-plex-sans-arabic-arabic-400-normal.woff2`, `-500-`, `-600-` | Arabic font (3 files) |
| `ibm-plex-sans-arabic-latin-400-normal.woff2`, `-500-`, `-600-` | Latin letters inside Arabic text (3 files) |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser and phone icons |
| `404.html` | "Page not found" page |
| `robots.txt`, `sitemap.xml` | Search engines |
| `LICENSE-Montserrat-OFL.txt`, `LICENSE-IBM-Plex-OFL.txt` | Font licences (free to use) |
| `.nojekyll` | Already in the repository. Keep it |
| `README.md` | This guide (optional) |

## How to upload

1. Open https://github.com/acchm2020-ctrl/hossammamdouh
2. Click **Add file › Upload files**.
3. Unzip the ZIP. Open the folder, press **Ctrl+A** (Mac: **Cmd+A**) to select **all files inside it**, and drag them into the upload area.
4. Check that the list shows `style.css`, `main.js`, `hossam-mamdouh.jpg` and the 9 `.woff2` files. Files with the same name as existing ones replace them, which is expected.
5. Click **Commit changes**.
6. Wait 1–3 minutes, then open the site and press **Ctrl+F5** (Mac: **Cmd+Shift+R**) to bypass the old cached version.

The old `assets` folder was never uploaded and is no longer needed, so there is nothing to delete.

## Checking it worked

- These links should open the file, not a 404 page:
  - https://acchm2020-ctrl.github.io/hossammamdouh/style.css
  - https://acchm2020-ctrl.github.io/hossammamdouh/hossam-mamdouh.jpg
- Check the LinkedIn preview at https://www.linkedin.com/post-inspector/

---

# بالعربية

**سبب المشكلة:** مجلد `assets` (الذي يحتوي على التنسيق والصورة والخطوط) لم يُرفع إلى GitHub، فظهرت الصفحة نصًا بلا تنسيق.
**الحل:** هذه النسخة بلا مجلدات، وكل الملفات في مستوى واحد.

1. افتح المستودع، ثم **Add file › Upload files**.
2. فك ضغط الملف، وافتح المجلد، وحدد **كل الملفات بداخله** (Ctrl+A)، واسحبها إلى صفحة الرفع.
3. تأكد أن القائمة تحتوي على `style.css` و`main.js` و`hossam-mamdouh.jpg`، ثم اضغط **Commit changes**.
4. انتظر من دقيقة إلى ثلاث دقائق، ثم افتح الموقع واضغط **Ctrl+F5** لتحديث النسخة القديمة.
