---
title: ''
summary: 'Rocio Madera, Assistant Professor of Economics at Southern Methodist University.'
date: 2026-06-10
type: landing

sections:
  - block: resume-biography-3
    id: bio
    content:
      username: me
      text: |
        I am an Assistant Professor of Economics at Southern Methodist University and a CESifo Research Network affiliate. I study how income uncertainty, labor-market frictions, and local economic conditions shape heterogeneous household consumption and family decisions, welfare, and the design of public policy. Download my CV [here](/uploads/madera_cv.pdf) to learn more about me and my work.
      headings:
        about: ''
        education: Education
        interests: Research Fields
    design:
      name:
        size: md
      avatar:
        size: xl
        shape: circle

  # - block: markdown
  #   id: focus
  #   content:
  #     title: Research Focus
  #     text: |-
  #       My work is designed for questions where high-quality data and transparent quantitative models can improve institutional decision-making.

  #       I combine administrative records, household panel data, consumption data, and spatial/platform data with life-cycle and macro-labor models. The goal is to measure risk, evaluate counterfactual policies, and make welfare trade-offs explicit for public agencies, research institutions, technology firms, and financial-sector policy teams.

  #       Current themes include income tail risk, consumption insurance, active labor-market policy, self-employment, tourism and urban welfare, and the spatial transmission of fiscal stimulus.
  #   design:
  #     columns: '1'

  - block: collection
    id: publications
    content:
      title: Publications
      filters:
        folders:
          - publications
        publication_type: "article-journal"
      count: 0
    design:
      view: citation

  - block: collection
    id: working-papers
    content:
      title: Working Papers
      filters:
        folders:
          - publications
        publication_type: "article"
      count: 0
    design:
      view: citation

  # Previous WIP layout: restore this collection block to revert the card experiment.
  # - block: collection
  #   id: wip
  #   content:
  #     title: Ongoing Projects
  #     filters:
  #       folders:
  #         - publications
  #       publication_type: "report"
  #     count: 0
  #   design:
  #     view: citation

  - block: markdown
    id: wip
    content:
      title: Ongoing Projects
      text: |-
        <div class="wip-grid">
          <article class="wip-card">
            <div class="wip-chart" aria-hidden="true">
              <svg viewBox="0 0 240 96" role="img">
                <path class="wip-chart-grid" d="M24 18H224M24 44H224M24 70H224"/>
                <path class="wip-chart-area" d="M24 68C58 62 76 47 104 50C134 53 148 36 176 32C198 29 210 24 224 21L224 82H24Z"/>
                <path class="wip-chart-line" d="M24 68C58 62 76 47 104 50C134 53 148 36 176 32C198 29 210 24 224 21"/>
                <circle cx="224" cy="21" r="4"/>
              </svg>
            </div>
            <div class="wip-card-body">
              <p class="wip-status">Drafting empirical sections</p>
              <h3>Individual Careers and Household Income Inequality</h3>
              <p>Work in progress on the role of individual career choice and marriage sorting in accounting for household income inequality.</p>
              <div class="wip-meter" aria-label="Project status: 68 percent complete"><span style="width: 68%"></span></div>
            </div>
          </article>

          <article class="wip-card">
            <div class="wip-chart" aria-hidden="true">
              <svg viewBox="0 0 240 96" role="img">
                <path class="wip-chart-grid" d="M24 18H224M24 44H224M24 70H224"/>
                <rect class="wip-bar wip-bar-a" x="38" y="50" width="24" height="32" rx="3"/>
                <rect class="wip-bar wip-bar-b" x="82" y="34" width="24" height="48" rx="3"/>
                <rect class="wip-bar wip-bar-c" x="126" y="42" width="24" height="40" rx="3"/>
                <rect class="wip-bar wip-bar-d" x="170" y="25" width="24" height="57" rx="3"/>
                <path class="wip-chart-line" d="M38 59C70 54 84 48 106 50C134 53 150 36 178 31C198 27 212 25 224 20"/>
              </svg>
            </div>
            <div class="wip-card-body">
              <p class="wip-status">Network measurement and counterfactuals</p>
              <h3>Spatial Fiscal Policy: Stimulus Payments in a Consumption Network</h3>
              <p>Studies spatial transmission of fiscal stimulus through consumption networks and local spending linkages.</p>
              <div class="wip-meter" aria-label="Project status: 58 percent complete"><span style="width: 58%"></span></div>
            </div>
          </article>

          <article class="wip-card">
            <div class="wip-chart" aria-hidden="true">
              <svg viewBox="0 0 240 96" role="img">
                <path class="wip-chart-grid" d="M24 18H224M24 44H224M24 70H224"/>
                <path class="wip-chart-area" d="M24 74C54 70 78 65 102 55C130 43 152 47 178 36C198 28 214 27 224 25L224 82H24Z"/>
                <path class="wip-chart-line" d="M24 74C54 70 78 65 102 55C130 43 152 47 178 36C198 28 214 27 224 25"/>
                <circle cx="102" cy="55" r="4"/>
                <circle cx="178" cy="36" r="4"/>
              </svg>
            </div>
            <div class="wip-card-body">
              <p class="wip-status">Model calibration</p>
              <h3>Early-Career Job Instability and Life-Cycle Income Dynamics</h3>
              <p>Work in progress on early-career job instability, temporary contracts, and life-cycle income dynamics.</p>
              <div class="wip-meter" aria-label="Project status: 46 percent complete"><span style="width: 46%"></span></div>
            </div>
          </article>
        </div>
    design:
      columns: '1'

  - block: collection
    id: policy
    content:
      title: Book Chapters and Policy
      filters:
        folders:
          - publications
        publication_type: "chapter"
      count: 0
    design:
      view: citation

  - block: markdown
    id: skills
    content:
      title: Skills
      text: |
        <div class="skills-grid">
          <div class="skill-item"><svg viewBox="0 0 70 70" class="skill-ring"><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" class="ring-bg"/><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" stroke-dasharray="175.93" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 35 35)" class="ring-fill"/><text x="35" y="40" text-anchor="middle" font-size="13" font-weight="600" class="ring-text">100%</text></svg><div class="skill-label">Stata</div></div>
          <div class="skill-item"><svg viewBox="0 0 70 70" class="skill-ring"><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" class="ring-bg"/><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" stroke-dasharray="175.93" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 35 35)" class="ring-fill"/><text x="35" y="40" text-anchor="middle" font-size="13" font-weight="600" class="ring-text">100%</text></svg><div class="skill-label">Matlab</div></div>
          <div class="skill-item"><svg viewBox="0 0 70 70" class="skill-ring"><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" class="ring-bg"/><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" stroke-dasharray="175.93" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 35 35)" class="ring-fill"/><text x="35" y="40" text-anchor="middle" font-size="13" font-weight="600" class="ring-text">100%</text></svg><div class="skill-label">R</div></div>
          <div class="skill-item"><svg viewBox="0 0 70 70" class="skill-ring"><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" class="ring-bg"/><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" stroke-dasharray="175.93" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 35 35)" class="ring-fill"/><text x="35" y="40" text-anchor="middle" font-size="13" font-weight="600" class="ring-text">100%</text></svg><div class="skill-label">Econometrics</div></div>
          <div class="skill-item"><svg viewBox="0 0 70 70" class="skill-ring"><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" class="ring-bg"/><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" stroke-dasharray="175.93" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 35 35)" class="ring-fill"/><text x="35" y="40" text-anchor="middle" font-size="13" font-weight="600" class="ring-text">100%</text></svg><div class="skill-label">Fortran</div></div>
          <div class="skill-item"><svg viewBox="0 0 70 70" class="skill-ring"><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" class="ring-bg"/><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" stroke-dasharray="175.93" stroke-dashoffset="35.19" stroke-linecap="round" transform="rotate(-90 35 35)" class="ring-fill"/><text x="35" y="40" text-anchor="middle" font-size="13" font-weight="600" class="ring-text">80%</text></svg><div class="skill-label">Julia</div></div>
          <div class="skill-item"><svg viewBox="0 0 70 70" class="skill-ring"><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" class="ring-bg"/><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" stroke-dasharray="175.93" stroke-dashoffset="35.19" stroke-linecap="round" transform="rotate(-90 35 35)" class="ring-fill"/><text x="35" y="40" text-anchor="middle" font-size="13" font-weight="600" class="ring-text">80%</text></svg><div class="skill-label">Python</div></div>
          <div class="skill-item"><svg viewBox="0 0 70 70" class="skill-ring"><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" class="ring-bg"/><circle cx="35" cy="35" r="28" fill="none" stroke-width="6" stroke-dasharray="175.93" stroke-dashoffset="35.19" stroke-linecap="round" transform="rotate(-90 35 35)" class="ring-fill"/><text x="35" y="40" text-anchor="middle" font-size="13" font-weight="600" class="ring-text">80%</text></svg><div class="skill-label">GIS</div></div>
        </div>
    design:
      columns: '1'

  - block: markdown
    id: teaching
    content:
      title: Teaching
      text: |-
        **Southern Methodist University**

        - Intermediate Macroeconomics, Undergraduate
        - Macroeconomic Theory and Policy, Undergraduate
        - Macroeconomics, Master
        - Macroeconomics with Heterogeneity and Monetary Economics, PhD
    design:
      columns: '1'
---
