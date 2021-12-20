// update translation page
const articles = [
    [
        'https://mp.weixin.qq.com/s/N7T58PYDM-RRm48CBv-gAQ',
        'Stop Using CSVs for Storage — This File Format Is 150 Times Faster',
        '别用csv存储了-这种文件格式比csv快150倍',
        '10/26/2021'
    ],
    [
        '#',
        'Few-Shot Image Classification with Meta-Learning',
        '元学习实现小样本图片分类',
        '03/17/2020',
    ],
    [
        'https://mp.weixin.qq.com/s/KsOk5Zx_fHyy8Jc7AWdz2',
        'AutoFlip: An Open Source Framework for Intelligent Video Reframing',
        '智能化视频剪辑开源框架AutoFlip',
        '02/23/2020'
    ],
    [
        'https://mp.weixin.qq.com/s/Ak9iIbtTMGYR6wC0Gp7RjA',
        '5 Open Source Machine Learning Projects to Challenge your Inner Data Scientist',
        '5个机器学习开源项目挑战你的数据科学技能',
        '02/04/2020'
    ],
];

function add_article(link, title_en, title_cn, date) {
    const a = $("<a>", { class: 'list-group-item list-group-item-action', href: link, target: '_blank' });
    const div_title = $("<div>", { class: 'd-inline' });
    const p_en = $("<p>", { class: 'lang-en' }).text(title_en);
    const p_cn = $("<p>", { class: 'lang-cn' }).text(title_cn);
    div_title.append(p_en, p_cn);
    const div_date = $("<div>", { class: 'd-inline badge badge-primary text-wrap float-right', style: 'width: 6rem' }).text(date);
    a.append(div_title, div_date);
    return a;
}

for (let i = 0; i < articles.length; i++) {
    console.log(articles[i]);
    $('#translation_gp').append(add_article(articles[i][0], articles[i][1], articles[i][2], articles[i][3]));
}


// update index page
const educations = [
    'PhD, Natural Language Processing, Purdue University, Present',
    'MS, Computer and Information Technology, Purdue University, 2021',
    'BS, Computer Science, University of Massachusetts Amherst, 2019'
]

const papers = [
    ['#', 'Examination of Gender Bias in News Articles'],
    ['#', 'A \"Bias\" Report in NLP'],
    ['#', 'Bias in Statements'],
];

const projects = [
    ['https://github.com/daminz97/GameLog-v3', 'GameLog v3'],
    ['https://youtu.be/IKiJi5XbVNc', 'Bias in Statements'],
    ['https://github.com/daminz97/Flick', 'Flick'],
    ['https://github.com/daminz97/HCIProject', 'GameLog v1'],
    ['./resource/soval/index.html', 'Auto Quote'],
    ['https://github.com/daminz97/MobileScanner', 'MobileScanner'],
    ['https://github.com/daminz97/Movie_Recommendation_System', 'Movie Recommendation System'],
    ['https://github.com/daminz97/PC_Builder', 'PC Builder'],
    ['./resource/phdprogram/index.html', 'Ph.D. Admission Visualization'],
    ['https://github.com/daminz97/price-alert', 'Price Alert'],
];

function add_education(education) {
    const li = $('<li>', { class: 'font-weight-normal' });
    const a = $('<p>').text(education);
    return li.append(a);
}

function add_paper_or_project(link, title) {
    const li = $('<li>', { class: 'font-weight-normal' });
    const a = $('<a>', { href: link }).text(title);
    return li.append(a);
}

for (let i = 0; i < papers.length; i++) {
    $('#educations').append(add_education(educations[i]));
}

for (let i = 0; i < papers.length; i++) {
    $('#paper_list').append(add_paper_or_project(papers[i][0], papers[i][1]));
}

for (let i = 0; i < projects.length; i++) {
    $('#project_list').append(add_paper_or_project(projects[i][0], projects[i][1]));
}