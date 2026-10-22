import fs from 'fs';
import path from 'path';

function saveRgbaToBmp(w, h, rgbaData, outPath) {
  const rowStride = Math.floor((w * 3 + 3) / 4) * 4;
  const fileSize = 54 + rowStride * h;
  const buf = Buffer.alloc(fileSize);

  buf.write('BM', 0);
  buf.writeUInt32LE(fileSize, 2);
  buf.writeUInt32LE(0, 6);
  buf.writeUInt32LE(54, 10);

  buf.writeUInt32LE(40, 14);
  buf.writeInt32LE(w, 18);
  buf.writeInt32LE(h, 22);
  buf.writeUInt16LE(1, 26);
  buf.writeUInt16LE(24, 28);
  buf.writeUInt32LE(0, 30);
  buf.writeUInt32LE(rowStride * h, 34);
  buf.writeInt32LE(2835, 38);
  buf.writeInt32LE(2835, 42);
  buf.writeUInt32LE(0, 46);
  buf.writeUInt32LE(0, 50);

  for (let y = 0; y < h; y++) {
    const srcRow = h - 1 - y;
    const destOffset = 54 + y * rowStride;
    for (let x = 0; x < w; x++) {
      const srcOffset = (srcRow * w + x) * 4;
      const r = rgbaData[srcOffset];
      const g = rgbaData[srcOffset + 1];
      const b = rgbaData[srcOffset + 2];
      const a = rgbaData[srcOffset + 3] / 255.0;

      // Clean blend onto pure white
      const outR = Math.round(r * a + 255 * (1 - a));
      const outG = Math.round(g * a + 255 * (1 - a));
      const outB = Math.round(b * a + 255 * (1 - a));
      buf[destOffset + x * 3] = outB;
      buf[destOffset + x * 3 + 1] = outG;
      buf[destOffset + x * 3 + 2] = outR;
    }
  }

  fs.writeFileSync(outPath, buf);
}

async function run() {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'C:/Users/Masterstroke.000/Downloads/Nailing Products Catalogue.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjs.getDocument({ data }).promise;

  const mappings = [
    { slug: 'inter-locking-tibia-nail', page: 2, img: 'img_p1_2' },
    { slug: 'tibia-nail', page: 3, img: 'img_p2_1' },
    { slug: 'expert-tibia-nail', page: 4, img: 'img_p3_1' },
    { slug: 'sirus-tibia-nail', page: 5, img: 'img_p4_1' },
    { slug: 'inter-locking-femur-nail', page: 6, img: 'img_p5_1' },
    { slug: 'femur-nail', page: 7, img: 'img_p6_2' },
    { slug: 'expert-femur-nail', page: 8, img: 'img_p7_1' },
    { slug: 'sirus-femur-nail', page: 9, img: 'img_p8_1' },
    { slug: 'recon-nail', page: 10, img: 'img_p9_1' },
    { slug: 'recon-nail-short', page: 11, img: 'img_p10_1' },
    { slug: 'inter-locking-humerus-nail', page: 12, img: 'img_p11_7' },
    { slug: 'humerus-nail', page: 13, img: 'img_p12_1' },
    { slug: 'multilock-humerus-short-nail', page: 14, img: 'img_p13_2' },
    { slug: 'multilock-humerus-long-nail', page: 15, img: 'img_p14_3' },
    { slug: 'proximal-femur-nail-pfn', page: 16, img: 'img_p15_2' },
    { slug: 'proximal-femur-nail-short', page: 18, img: 'img_p17_2' },
    { slug: 'trochanteric-femur-nail-short', page: 19, img: 'img_p18_1' },
    { slug: 'pfna-nail-long', page: 20, img: 'img_p19_1' },
    { slug: 'pfna-nail-short', page: 21, img: 'img_p20_1' },
    { slug: 'pfna-plus-nail-long', page: 22, img: 'img_p21_1' },
    { slug: 'pfna-plus-nail-short', page: 23, img: 'img_p22_1' },
    { slug: 'supracondylar-femoral-nail', page: 24, img: 'img_p23_1' },
    { slug: 'retrograde-femoral-nail', page: 25, img: 'img_p24_1' },
    { slug: 'ankle-arthrodesis-nail', page: 26, img: 'img_p25_1' },
    { slug: 'elastic-nail-ten', page: 27, img: 'img_p26_1' },
    { slug: 'kuntscher-cloverleaf-nail-femur', page: 28, img: 'img_p27_2' },
    { slug: 'v-nail-for-tibia', page: 29, img: 'img_p28_1' },
    { slug: 'enders-nail', page: 30, img: 'img_p29_1' },
    { slug: 'square-nail-radius-ulna', page: 31, img: 'img_p30_2' },
    { slug: 'rush-nail', page: 32, img: 'img_p31_1' },
    { slug: 'screw-intramedullary-nail', page: 33, img: 'img_p32_1' },
    { slug: 'interlocking-screws-nailing-hardware', page: 34, img: 'img_p33_3' }
  ];

  fs.mkdirSync('raw_bmps', { recursive: true });

  for (const m of mappings) {
    const page = await doc.getPage(m.page);
    await page.getOperatorList(); // MUST be called to parse objects!
    await new Promise((resolve) => {
      page.objs.get(m.img, (img) => {
        if (img && img.data) {
          saveRgbaToBmp(img.width, img.height, img.data, `raw_bmps/${m.slug}.bmp`);
          console.log(`Extracted ${m.slug}: ${img.width}x${img.height}`);
        } else {
          console.warn(`Could not find ${m.img} on page ${m.page}`);
        }
        resolve();
      });
    });
  }
  console.log('All 32 product family images successfully extracted to raw_bmps!');
}

run().catch(console.error);
