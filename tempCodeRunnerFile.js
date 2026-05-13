const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  LevelFormat, BorderStyle, HeadingLevel, Table, TableRow,
  TableCell, WidthType, ShadingType, VerticalAlign
} = require('docx');
const fs = require('fs');

const NAVY = "1A3557";
const BLUE = "2E6DA4";
const LIGHT_BLUE = "D6E8F5";
const GOLD = "B8860B";
const DARK = "1C1C1C";
const GRAY = "555555";

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "numbers",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  },
  styles: {
    default: {
      document: { run: { font: "Georgia", size: 22, color: DARK } }
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: BLUE },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1260 }
      }
    },
    children: [

      // ─── TOP ACCENT BAR (via border trick on blank paragraph) ───
      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 24, color: NAVY, space: 1 } },
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: "" })]
      }),

      // ─── DOCUMENT TITLE ───
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 160, after: 60 },
        children: [
          new TextRun({ text: "MEETING REQUEST", font: "Arial", size: 36, bold: true, color: NAVY, allCaps: true })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 40 },
        children: [
          new TextRun({ text: "To the Office of the Hon\u2019ble Union Minister of Jal Shakti", font: "Arial", size: 22, color: BLUE, italics: true })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 60 },
        children: [
          new TextRun({ text: "Shri C. R. Patil Ji", font: "Arial", size: 26, bold: true, color: GOLD })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 40 },
        children: [
          new TextRun({ text: "Government of India", font: "Arial", size: 20, color: GRAY })
        ]
      }),

      // ─── ROUTING LINE ───
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 40 },
        children: [
          new TextRun({ text: "Routed through: ", font: "Arial", size: 20, bold: true, color: NAVY }),
          new TextRun({ text: "Smt. Smita Uday Wagh, Hon\u2019ble Member of Parliament, Jalgaon Constituency", font: "Arial", size: 20, color: DARK })
        ]
      }),

      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: LIGHT_BLUE, space: 1 } },
        spacing: { before: 120, after: 240 },
        children: [new TextRun({ text: "" })]
      }),

      // ─── QUOTE ───
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 40 },
        children: [
          new TextRun({ text: "\u201Cजलम् विना न जीवनम् | सर्वथा एव रक्षणीयम् ॥\u201D", font: "Mangal", size: 22, italics: true, color: BLUE })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 240 },
        children: [
          new TextRun({ text: "\u201CWithout water, there is no life \u2014 it must be protected in every way.\u201D", font: "Georgia", size: 20, italics: true, color: GRAY })
        ]
      }),

      // ─── REQUESTED BY SECTION ───
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Requested By", font: "Arial", size: 30, bold: true, color: NAVY })] }),

      new Paragraph({
        spacing: { before: 80, after: 80 },
        children: [
          new TextRun({ text: "Name: ", font: "Arial", size: 22, bold: true, color: NAVY }),
          new TextRun({ text: "Vishal Shivaji Patil", font: "Arial", size: 22, color: DARK })
        ]
      }),
      new Paragraph({
        spacing: { before: 60, after: 60 },
        children: [
          new TextRun({ text: "Role: ", font: "Arial", size: 22, bold: true, color: NAVY }),
          new TextRun({ text: "Principal Investigator & Team Lead, Team JyotirVega", font: "Arial", size: 22, color: DARK })
        ]
      }),
      new Paragraph({
        spacing: { before: 60, after: 60 },
        children: [
          new TextRun({ text: "Institution: ", font: "Arial", size: 22, bold: true, color: NAVY }),
          new TextRun({ text: "Aurixys / KVN Naik SP Santha\u2019s Loknete Gopinathji Munde Institute of Engineering Education & Research (LoGMIEER), Nashik, Maharashtra", font: "Arial", size: 22, color: DARK })
        ]
      }),
      new Paragraph({
        spacing: { before: 60, after: 60 },
        children: [
          new TextRun({ text: "Contact: ", font: "Arial", size: 22, bold: true, color: NAVY }),
          new TextRun({ text: "+91 70384 86909  |  vishalshivajipatil431@gmail.com", font: "Arial", size: 22, color: DARK })
        ]
      }),

      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LIGHT_BLUE, space: 1 } },
        spacing: { before: 120, after: 240 },
        children: [new TextRun({ text: "" })]
      }),

      // ─── BACKGROUND ───
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Background", font: "Arial", size: 30, bold: true, color: NAVY })] }),

      new Paragraph({
        spacing: { before: 80, after: 120 },
        children: [
          new TextRun({ text: "Team JyotirVega has been honoured with the ", font: "Georgia", size: 22, color: DARK }),
          new TextRun({ text: "National Championship of the Jal Shakti Hackathon 2025", font: "Georgia", size: 22, bold: true, color: NAVY }),
          new TextRun({ text: ", conducted by the Ministry of Jal Shakti, Government of India. The award ceremony was held at the ", font: "Georgia", size: 22, color: DARK }),
          new TextRun({ text: "World Water Day Conclave 2026", font: "Georgia", size: 22, bold: true, color: BLUE }),
          new TextRun({ text: " at Dr. Ambedkar International Centre, New Delhi, where our team was conferred a Certificate of Merit and a Prize of ", font: "Georgia", size: 22, color: DARK }),
          new TextRun({ text: "\u20B91,00,000 (One Lakh Rupees)", font: "Georgia", size: 22, bold: true, color: GOLD }),
          new TextRun({ text: " by Hon\u2019ble Minister Shri C. R. Patil Ji himself \u2014 a moment of profound honour for our entire team.", font: "Georgia", size: 22, color: DARK })
        ]
      }),

      new Paragraph({
        spacing: { before: 80, after: 60 },
        children: [
          new TextRun({ text: "Our Winning Project:", font: "Arial", size: 22, bold: true, color: NAVY })
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 60, after: 40 },
        children: [
          new TextRun({ text: "Jal Prahari", font: "Arial", size: 28, bold: true, color: NAVY })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 120 },
        children: [
          new TextRun({ text: "Solar-Hybrid Autonomous Surface Vessel with Active Dipping Mechanism", font: "Arial", size: 22, italics: true, color: BLUE }),
          new TextRun({ text: "\nfor Precision River Profiling", font: "Arial", size: 22, italics: true, color: BLUE })
        ]
      }),

      new Paragraph({
        spacing: { before: 40, after: 120 },
        children: [
          new TextRun({ text: "Jal Prahari is a fully indigenously designed and built autonomous vessel capable of real-time precision river profiling. It integrates solar-hybrid propulsion, an active dipping mechanism for multi-depth water sampling, and AI-driven onboard analytics. The vessel has been successfully ", font: "Georgia", size: 22, color: DARK }),
          new TextRun({ text: "field-validated on the Godavari River (Nashik) and the Ganga River (Varanasi)", font: "Georgia", size: 22, bold: true, color: BLUE }),
          new TextRun({ text: ", proving its operational readiness in real-world conditions.", font: "Georgia", size: 22, color: DARK })
        ]
      }),

      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LIGHT_BLUE, space: 1 } },
        spacing: { before: 120, after: 240 },
        children: [new TextRun({ text: "" })]
      }),

      // ─── CURRENT STATUS ───
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Current Status", font: "Arial", size: 30, bold: true, color: NAVY })] }),

      new Paragraph({
        spacing: { before: 80, after: 80 },
        children: [
          new TextRun({ text: "We are presently in the active phase of submitting our ", font: "Georgia", size: 22, color: DARK }),
          new TextRun({ text: "Proof of Concept (PoC)", font: "Georgia", size: 22, bold: true, color: NAVY }),
          new TextRun({ text: " to the Department of Water Resources, River Development & Ganga Rejuvenation (DoWR, RD & GR) through the ", font: "Georgia", size: 22, color: DARK }),
          new TextRun({ text: "National Institute of Hydrology (NIH), Roorkee.", font: "Georgia", size: 22, bold: true, color: BLUE })
        ]
      }),
      new Paragraph({
        spacing: { before: 60, after: 60 },
        children: [
          new TextRun({ text: "PoC Submission Deadline: ", font: "Arial", size: 22, bold: true, color: NAVY }),
          new TextRun({ text: "30 May 2026", font: "Arial", size: 22, color: DARK })
        ]
      }),
      new Paragraph({
        spacing: { before: 60, after: 120 },
        children: [
          new TextRun({ text: "Grant-in-Aid Status: ", font: "Arial", size: 22, bold: true, color: NAVY }),
          new TextRun({ text: "Funding for the next development phase is presently under active consideration by the Ministry.", font: "Arial", size: 22, color: DARK })
        ]
      }),

      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LIGHT_BLUE, space: 1 } },
        spacing: { before: 120, after: 240 },
        children: [new TextRun({ text: "" })]
      }),

      // ─── PURPOSE OF MEETING ───
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Purpose of the Requested Meeting", font: "Arial", size: 30, bold: true, color: NAVY })] }),

      new Paragraph({
        spacing: { before: 80, after: 60 },
        children: [
          new TextRun({ text: "We humbly request a brief audience with the Hon\u2019ble Minister to accomplish the following:", font: "Georgia", size: 22, color: DARK })
        ]
      }),

      // Numbered items
      ...[
        {
          label: "Formal Expression of Gratitude",
          text: "To personally and formally convey our team\u2019s deepest gratitude to the Hon\u2019ble Minister for the recognition and encouragement extended at the World Water Day Conclave 2026. This acknowledgement from the highest level has been a powerful motivator for our entire team."
        },
        {
          label: "Progress Presentation",
          text: "To briefly present the current status of Jal Prahari and share our roadmap for the next 12 months \u2014 including PoC milestones, planned upgrades, and outreach targets. The presentation will be concise and focused, respecting the Minister\u2019s valuable time."
        },
        {
          label: "Seek the Hon\u2019ble Minister\u2019s Guidance on Key Strategic Questions",
          text: ""
        }
      ].map((item, i) => {
        const paras = [
          new Paragraph({
            numbering: { reference: "numbers", level: 0 },
            spacing: { before: 80, after: 40 },
            children: [
              new TextRun({ text: item.label, font: "Arial", size: 22, bold: true, color: NAVY }),
              ...(item.text ? [new TextRun({ text: " \u2014 " + item.text, font: "Georgia", size: 22, color: DARK })] : [])
            ]
          })
        ];
        return paras;
      }).flat(),

      // Sub-bullets under point 3
      ...[
        "Ministry\u2019s expectations from Jal Shakti Hackathon awardees in the post-PoC phase \u2014 to ensure we align our deliverables precisely with what the Ministry envisions.",
        "Best pathway to integrate our work with the National Water Mission, Namami Gange, and Namami Godavari programmes \u2014 so that Jal Prahari contributes meaningfully to these national priorities.",
        "Our planned flagship deployment at Simhastha Kumbh Mela 2027, Nashik \u2014 delivering real-time water quality monitoring across bathing ghats for crores of pilgrims, a mission-critical application that aligns directly with the Ministry\u2019s public health and water safety mandate."
      ].map(text => new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { before: 60, after: 60 },
        children: [new TextRun({ text, font: "Georgia", size: 22, color: DARK })]
      })),

      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LIGHT_BLUE, space: 1 } },
        spacing: { before: 200, after: 240 },
        children: [new TextRun({ text: "" })]
      }),

      // ─── CLOSING ───
      new Paragraph({
        spacing: { before: 0, after: 80 },
        children: [
          new TextRun({ text: "We earnestly believe that a brief interaction with the Hon\u2019ble Minister will provide transformative direction to our work and enable us to contribute more effectively to India\u2019s water security mission.", font: "Georgia", size: 22, color: DARK, italics: true })
        ]
      }),
      new Paragraph({
        spacing: { before: 80, after: 80 },
        children: [
          new TextRun({ text: "We remain ever grateful for this opportunity and stand ready to serve the nation\u2019s water future.", font: "Georgia", size: 22, color: DARK, italics: true })
        ]
      }),

      new Paragraph({ spacing: { before: 120, after: 40 }, children: [new TextRun({ text: "Respectfully submitted by,", font: "Arial", size: 22, color: DARK })] }),
      new Paragraph({ spacing: { before: 40, after: 40 }, children: [new TextRun({ text: "Vishal Shivaji Patil", font: "Arial", size: 24, bold: true, color: NAVY })] }),
      new Paragraph({ spacing: { before: 0, after: 40 }, children: [new TextRun({ text: "Principal Investigator & Team Lead, Team JyotirVega", font: "Arial", size: 21, color: BLUE })] }),
      new Paragraph({ spacing: { before: 0, after: 40 }, children: [new TextRun({ text: "Aurixys / LoGMIEER, Nashik, Maharashtra", font: "Arial", size: 21, color: GRAY })] }),
      new Paragraph({ spacing: { before: 0, after: 40 }, children: [new TextRun({ text: "+91 70384 86909  |  vishalshivajipatil431@gmail.com", font: "Arial", size: 21, color: GRAY })] }),

      // Footer line
      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 24, color: NAVY, space: 1 } },
        spacing: { before: 240, after: 80 },
        children: [new TextRun({ text: "" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 0 },
        children: [
          new TextRun({ text: "Water brought us together. Purpose kept us going. \uD83D\uDCA7", font: "Georgia", size: 20, italics: true, color: BLUE })
        ]
      }),

    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("/home/claude/meeting_request_english.docx", buf);
  console.log("English doc created.");
});