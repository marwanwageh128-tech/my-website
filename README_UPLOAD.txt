MARWAN WAGEH PORTFOLIO — UPDATED VERSION

WHAT'S UPDATED
- Replaced the four homepage category thumbnails with calm, custom-designed category covers.
- Organized the artwork into individual project folders inside the relevant category folders.
- Added the Meeza Delivery branding case study with 6 optimized artwork images.
- Converted every project detail gallery into an Instagram-style horizontal carousel with swipe, arrows, dots and slide counter.
- Each project folder contains its artwork, a README.txt, and its own index.html gallery page.
- Updated the category pages to show project folders instead of a long flat list of individual images.
- Checked all local HTML image, stylesheet, script and navigation references: no broken local references found.

PUBLISH ON GITHUB PAGES
1. Extract this ZIP file.
2. Open your GitHub repository: marwanwageh128-tech / marwan-wageh-portfolio.
3. Upload the CONTENTS of the extracted folder to the repository root (not the enclosing folder).
4. Choose to replace the existing index.html, category pages, assets folder and other files when GitHub asks.
5. Commit the changes to the main branch.
6. Wait for GitHub Pages to finish publishing, then open:
   https://marwanwageh128-tech.github.io/marwan-wageh-portfolio/

ADDING FUTURE PROJECTS
1. Create a new project folder inside the correct category under assets/projects/.
2. Put that project's optimized images in the new folder.
3. Create an index.html page for the project and place each image inside a
   <div class="detail-gallery"> using <a class="detail-image">...</a> items.
4. The shared assets/main.js automatically adds swipe, arrows, dots and a slide
   counter to every .detail-gallery. No extra carousel code is needed.
5. Add a project folder card linking to the new index.html on its category page.

IMPORTANT
Keep the folder structure intact. In particular, keep assets/covers and assets/projects together with index.html.
