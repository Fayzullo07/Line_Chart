export const data = {
    labels: [
        "7 - aprel",
        // "",
        "8 - aprel",
        // "",
        "9 - aprel",
        // "",
        "10 - aprel",
        // "",
        "11 - aprel",
        // "",
        "12 - aprel",
        // "",
        "13 - aprel",
    ],
    datasets: [
        {
            data: [9, 7.8, 6, 3, 7, 5, 6],
            backgroundColor: "transparent",
            borderColor: "#ffc700",
            pointBorderColor: "transparent",
            pointBorderWidth: 4,
            tension: 0.5,
            yAxisID: "y",
        },
        {
            data: [7, 5.8, 4, 8, 5, 3, 4],
            backgroundColor: "transparent",
            borderColor: "#8c16d4",
            pointBorderColor: "transparent",
            pointBorderWidth: 4,
            tension: 0.5,
        },
        {
            data: [4, 8, 5, 3, 4, 7, 5.8],
            backgroundColor: "transparent",
            borderColor: "#169bd4",
            pointBorderColor: "transparent",
            pointBorderWidth: 4,
            tension: 0.5,
        },
    ],
};

export const options = {
    plugins: {
        legend: false,
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {

            min: 0,
            max: 10,
            ticks: {
                stepSize: 2,
                callback: (value) => value + " M",
            },
        },
    },
};


export const cards = [
    {
        img: 'https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-click-arrow-background-business-button-png-image_4620621.png',
        count: 50098,
        title: 'Clicklar soni'
    },
    {
        img: 'https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-click-arrow-background-business-button-png-image_4620621.png',
        count: 50098,
        title: "Ko'ruvchilar soni"
    },
    {
        img: 'https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-click-arrow-background-business-button-png-image_4620621.png',
        count: 50098,
        title: "Ko'rganlar odamlar soni"
    },
    {
        img: 'https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-click-arrow-background-business-button-png-image_4620621.png',
        count: 87,
        title: 'CTR'
    },
    {
        img: 'https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-click-arrow-background-business-button-png-image_4620621.png',
        count: 50098,
        title: 'Sarflangan summa'
    },
]

export const table = [
    {
        img: 'https://www.ftc.edu/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907.jpg',
        name: 'Iphone 14 pro',
        price: 30000,
        status: 2,
        count1: 50098,
        count2: 50098,
        count3: 87,
        count4: 100000,

    },
    {
        img: 'https://www.ftc.edu/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907.jpg',
        name: 'Iphone 13 pro',
        price: 30000,
        status: 1,
        count1: 50098,
        count2: 50098,
        count3: 87,
        count4: 100000,

    }, {
        img: 'https://www.ftc.edu/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907.jpg',
        name: 'Iphone 12 pro',
        price: 30000,
        status: 0,
        count1: 50098,
        count2: 50098,
        count3: 87,
        count4: 100000,

    }, {
        img: 'https://www.ftc.edu/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907.jpg',
        name: 'Iphone 11 pro',
        price: 30000,
        status: 2,
        count1: 50098,
        count2: 50098,
        count3: 87,
        count4: 100000,

    },
]