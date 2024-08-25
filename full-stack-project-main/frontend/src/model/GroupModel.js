export const Group = (id, name, role, groupPicture, members = 0, groupStatus, intro) => ({
    id,
    name,
    role,
    groupPicture,
    members,
    groupStatus,
    intro
});

export const modelgroups = [
    Group(
        '1',
        'RMIT Society',
        'Member',
        "/images/rmitlib.jpg",
        22050,
        'Private',
        'This is a group for RMIT students to share their thoughts and ideas.'
    ),
    Group(
        2,
        'RMIT MarketPlace',
        'Member',
        "/images/rmitb2.jpg",
        1050,
        'Private',
        'This is a group for RMIT students to buy and sell their merchandises.'
    )
    // {
    //     name: 'RMIT SSETS',
    //     status: 'Public',
    //     members: 1250,
    //     introduction: 'This is a group for RMIT students to share their thoughts and ideas about Tech.'
    // }
];