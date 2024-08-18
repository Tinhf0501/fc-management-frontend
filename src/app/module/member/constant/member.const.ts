export const POSITIONS = [
    {
        code: 'GK',
        name: 'MEMBER.POSITION.GK',
        i18key: 'MEMBER.POSITION.GK',
        group: 'MEMBER.POSITION.GK',
    },
    {
        code: 'CB',
        name: 'MEMBER.POSITION.CB',
        i18key: 'MEMBER.POSITION.CB',
        group: 'MEMBER.POSITION.DF',
    },
    {
        code: 'RB',
        name: 'MEMBER.POSITION.RB',
        i18key: 'MEMBER.POSITION.RB',
        group: 'MEMBER.POSITION.DF',
    },
    {
        code: 'LB',
        name: 'MEMBER.POSITION.LB',
        i18key: 'MEMBER.POSITION.LB',
        group: 'MEMBER.POSITION.DF',
    },
    {
        code: 'CDM',
        name: 'MEMBER.POSITION.CDM',
        i18key: 'MEMBER.POSITION.CDM',
        group: 'MEMBER.POSITION.MF',
    },
    {
        code: 'CM',
        name: 'MEMBER.POSITION.CM',
        i18key: 'MEMBER.POSITION.CM',
        group: 'MEMBER.POSITION.MF',
    },
    {
        code: 'CAM',
        name: 'MEMBER.POSITION.CAM',
        i18key: 'MEMBER.POSITION.CAM',
        group: 'MEMBER.POSITION.MF',
    },
    {
        code: 'LM',
        name: 'MEMBER.POSITION.LM',
        i18key: 'MEMBER.POSITION.LM',
        group: 'MEMBER.POSITION.MF',
    },
    {
        code: 'RM',
        name: 'MEMBER.POSITION.RM',
        i18key: 'MEMBER.POSITION.RM',
        group: 'MEMBER.POSITION.MF',
    },
    {
        code: 'CF',
        name: 'MEMBER.POSITION.CF',
        i18key: 'MEMBER.POSITION.CF',
        group: 'MEMBER.POSITION.FW',
    },
    {
        code: 'SS',
        name: 'MEMBER.POSITION.SS',
        i18key: 'MEMBER.POSITION.SS',
        group: 'MEMBER.POSITION.FW',
    },
    {
        code: 'RW',
        name: 'MEMBER.POSITION.RW',
        i18key: 'MEMBER.POSITION.RW',
        group: 'MEMBER.POSITION.FW',
    },
    {
        code: 'LW',
        name: 'MEMBER.POSITION.LW',
        i18key: 'MEMBER.POSITION.LW',
        group: 'MEMBER.POSITION.FW',
    },
    {
        code: 'ST',
        name: 'MEMBER.POSITION.ST',
        i18key: 'MEMBER.POSITION.ST',
        group: 'MEMBER.POSITION.FW',
    },
];

export const POSITION_MAP = POSITIONS.reduce((map, current) => {
    map.set(current.code, current);
    return map;
}, new Map());
