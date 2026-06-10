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
        I study how income risk, labor-market frictions, and household decisions shape consumption, welfare, and the design of public policy.
      button:
        text: Download CV
        url: uploads/madera_cv.pdf
      headings:
        about: ''
        education: Education
        interests: Research Fields
    design:
      name:
        size: md
      avatar:
        size: medium
        shape: rounded

  - block: markdown
    id: focus
    content:
      title: Research Focus
      text: |-
        My work is designed for questions where high-quality data and transparent quantitative models can improve institutional decision-making.

        I combine administrative records, household panel data, consumption data, and spatial/platform data with life-cycle and macro-labor models. The goal is to measure risk, evaluate counterfactual policies, and make welfare trade-offs explicit for public agencies, research institutions, technology firms, and financial-sector policy teams.

        Current themes include income tail risk, consumption insurance, active labor-market policy, self-employment, tourism and urban welfare, and the spatial transmission of fiscal stimulus.
    design:
      columns: '1'

  - block: collection
    id: research
    content:
      title: Selected Research
      text: 'Publications, working papers, and policy-relevant research projects.'
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: citation

  - block: collection
    id: all-research
    content:
      title: Publications and Working Papers
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation

  - block: markdown
    id: computing
    content:
      title: Computing and Data
      text: |-
        **Quantitative policy models.** Life-cycle models, income-risk processes, welfare statistics, and counterfactual policy evaluation.

        **Micro-data and measurement.** Administrative and household panel data, income dynamics, spending data, matched records, and distributional risk.

        **Reproducible workflows.** Stata, Matlab, Fortran, R, Git, numerical methods, simulation, and replication pipelines.
    design:
      columns: '1'

  - block: markdown
    id: teaching
    content:
      title: Teaching
      text: |-
        **Southern Methodist University**

        - Economic Analysis II / Macroeconomics, Master
        - Topics in Macro with Heterogeneity and Monetary Economics, PhD
        - Intermediate Macroeconomics, Undergraduate
        - Macroeconomic Theory and Policy, Undergraduate
    design:
      columns: '1'
---
