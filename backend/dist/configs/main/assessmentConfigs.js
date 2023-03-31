"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs = [
    {
        id: 1,
        name: 'assessment',
        assessmentStep: 'Project Name',
        subject: 'Name of the project under evaluation',
        component: 'projectName',
        hasPrevious: false,
        hasNext: true,
        key: 'assessment-name-form',
        fields: [{ name: 'riskName', type: 'text', label: 'Risk Name', class: 'text-placeholder' }],
        states: { name: { completed: false, state: 0 }, riskName: { color: 'white', touched: false, value: '', completed: false, state: 0 } },
        styles: { riskName: { border: `3px solid grey` } },
        formName: 'name',
        motion: {
            whileHover: { scale: 1.01 },
            whileTab: { scale: 0.95 }
        }
    },
    {
        id: 2,
        name: 'assessment',
        assessmentStep: 'Risk Introduction',
        subject: 'Statement explaining the risk and why it is a top risk to the firm. Provide a rating for the risk.',
        component: 'projectRisk',
        hasPrevious: true,
        hasNext: false,
        subFields: [
            {
                field: 'impact',
                options: ['Critical', 'High', 'Medium', 'Low', 'Minimal']
            },
            {
                field: 'likelihood',
                options: ['Critical', 'High', 'Medium', 'Low', 'Minimal']
            }
        ],
        key: 'assessment-risk-form',
        fields: [{ name: 'riskIntro', type: 'text', label: 'Risk Introduction', class: 'text-placeholder' },
            { name: 'impact', type: 'select', group: 1, label: 'Risk Impact', class: 'text-placeholder', options: ['Critical', 'High', 'Medium', 'Low', 'Minimal'] },
            { name: 'likelihood', type: 'select', group: 1, label: 'Risk Likelihood', class: 'text-placeholder', options: ['Critical', 'High', 'Medium', 'Low', 'Minimal'] }],
        states: { risk: { completed: false, state: 0 }, riskIntro: { color: 'white', touched: false, value: null, completed: false, state: 0 }, impact: { color: 'white', touched: false, value: 'Medium', completed: true, state: 1 }, likelihood: { color: 'white', touched: false, value: 'Medium', completed: true, state: 1 } },
        styles: { riskIntro: { border: `3px solid grey` } },
        formName: 'risk',
        motion: {
            whileHover: { scale: 1.01 },
            whileTab: { scale: 0.95 }
        }
    },
];
exports.default = configs;
//# sourceMappingURL=assessmentConfigs.js.map