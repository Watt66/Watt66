# IT support, networking, and Python automation portfolio

Prepared for David Gitau Maina on 24 November 2026. The goal is to show practical troubleshooting and development skills through working projects and explainable personal contributions.

## Profile direction

Suggested short bio:

> IT support | Networking | Python automation | BSc IT, KCA University | CCNA 1–3 coursework completed | Building practical support tools

Use CCNA coursework wording unless the separate certification exam has been passed. The profile README introduces the direction; project READMEs supply the evidence.

## What the repository review found

| Repository | Observed state on review | Next useful change |
| --- | --- | --- |
| `Watt66/Watt66` | No root `README.md`; JavaScript files and a tracked `node_modules` directory | Add the proposed profile README. Handle dependency cleanup separately after reviewing the existing project. |
| `AI-Learning-Assistant-Chatbot` | `app.py`, `requirements.txt`, and `data/docs.json` contain only a newline; README describes a working LLM application | Implement and test the application, then align the documentation with actual features. |
| `Image-Classification-CNN` | Only a README is present; it claims 93% accuracy and references an absent result image | Add reproducible training/evaluation code and measured outputs before using the accuracy claim. |
| `ai-projects` | A short README, MIT license, and an earlier ZIP archive | Add readable source for the new network analyzer and a clear project index. |
| `ai-job-finder`, `chrono-skill-studio` | Generic project-builder README instructions | Write project-specific setup, screenshots, limitations, and a description of personal changes. |

This was a targeted repository review, not a full security audit or validation of every application.

## Three focused projects

| Priority | Project | Small, demonstrable version | Evidence to include |
| --- | --- | --- | --- |
| 1 | Network Health Analyzer | Import one site's CSV, flag investigation thresholds, generate HTML/JSON | Sample input/output, test run, manual calculation, learning log, one personal extension |
| 2 | Guest and Staff Network Lab | Simulated guest/staff/management VLANs, DHCP, routing, and ACLs | Packet Tracer file, topology, sanitized configs, allowed/blocked connectivity tests |
| 3 | IT Support Knowledge Assistant | Search a small fictional support knowledge base, cite matching notes, defer unsupported questions | Working app, 20–30 test questions, retrieval results, failure examples, a short demo |

The network analyzer is rule-based automation, not an AI model. The knowledge assistant should begin with a retrieval baseline; add an LLM only after its source handling and evaluation are clear.

## A practical first 30 days

Aim for 45–60 minutes on most days; adjust the pace to work commitments.

| Days | Work | Completion evidence |
| --- | --- | --- |
| 1–7 | Review both draft PRs. Run the analyzer, read its code, and add one feature such as configurable thresholds. Record the experiment. | Passing tests, personal commit, short explanation of shared WAN capacity versus active clients |
| 8–14 | Build the isolated network lab. Allow guest internet traffic and block guest access to staff/management networks. | Topology, configuration files, DHCP result, connectivity test matrix |
| 15–21 | Implement a small support knowledge retrieval app using fictional notes. Add source references and an unsupported-question response. | Runnable app and a labeled set of test questions |
| 22–30 | Evaluate the assistant, fix a demonstrated failure, document all three projects, and record short demos. | Actual evaluation report, limitations, demo links, selected profile pins |

For the network lab, test both a connection that should succeed and one that should be blocked. For the assistant, keep some evaluation questions separate from examples used while developing it.

## Turn projects into experience honestly

Use a CV section called **Technical Projects** or **Independent Projects**. Record a problem, your contribution, a test, an observed result, and a limitation. Label synthetic data, simulations, templates, and AI assistance clearly.

After personally completing and understanding the work, possible CV wording is:

- Extended and tested a Python tool that validates Wi-Fi measurement exports and creates HTML/JSON troubleshooting reports.
- Configured and verified VLAN segmentation, DHCP, and access controls in a simulated guest and staff network.
- Implemented and evaluated a support knowledge assistant with source citations and handling for unsupported questions.

Replace the wording with the exact work actually performed. Add numbers only when they come from saved test results or approved real-world measurements. Do not describe unfinished starter code as employment experience or claim improvements at an employer without evidence.

Use an isolated home lab, volunteer work agreed with a small organization, or open-source documentation and bug fixes for further experience. For real work, agree the scope and data handling first; a public portfolio can show a fictional reconstruction of the problem.

## A repeatable project README

Every featured project should answer:

1. What problem does it solve, and for whom?
2. What works now, and what is still planned?
3. How can someone run it from a clean checkout?
4. What input, screenshot, or demo shows it working?
5. Which tests or evaluation results support its claims?
6. What did I personally change, and what are its limits?

Pin the strongest completed projects as they become ready. GitHub supports up to six combined repository/gist pins; three well-documented projects are enough to start. Keep meaningful commits that show implementation and fixes.

## References

- [GitHub: managing your profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)
- [GitHub: pinning items to your profile](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile)
