const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: "Admin", lastName: "Admin", email: "admin@admin.it", iban: "12903291032139", agentId: 1 },
    { id: 2, username: 'test', password: 'test', firstName: "Test", lastName: "Test", email: "test@test.it", iban: "12310293290129", agentId: 1 },
    { id: 3, username: 'manager', password: 'manager', firstName: "Manager", lastName: "Manager", email: "manager@company.com", iban: "56789012345678", agentId: 2 },
    { id: 4, username: 'employee', password: 'employee', firstName: "Employee", lastName: "Employee", email: "employee@company.com", iban: "90123456789012", agentId: 2 }
];

const agents = [
    { id: 1, name: "John Elkann", imgUrl: "https://www.calcioinpillole.com/wp-content/uploads/2024/04/John-Elkann-ansa-calcioinpillole-1.jpg" },
    { id: 2, name: "Lapo Elkann", imgUrl: "https://media-assets.vanityfair.it/photos/645def28c8b926063a87b0cc/3:2/w_2438,h_1625,c_limit/GettyImages-1422649718.jpg" },
    { id: 3, name: "Harry Potter", imgUrl: "https://img-9gag-fun.9cache.com/photo/amA1jK6_460s.jpg" }
];

const customers = [
    { id: 1, username: 'mariorossi', firstName: "Mario", lastName: "Rossi", email: "mario@rossi.it" },
    { id: 2, username: 'mariobianchi', firstName: "Mario", lastName: "Bianchi", email: "mario@bianchi.it" },
    { id: 3, username: 'mariobiondi', firstName: "Mario", lastName: "Biondi", email: "mario@biondi.it" },
    { id: 4, username: 'marioverdi', firstName: "Mario", lastName: "Verdi", email: "mario@verdi.it" },
    { id: 5, username: 'giorgiorossi', firstName: "Giorgio", lastName: "Rossi", email: "giorgio@rossi.it" },
    { id: 6, username: 'giorgiobianchi', firstName: "Giorgio", lastName: "Bianchi", email: "giorgio@bianchi.it" },
    { id: 7, username: 'giorgiobiondi', firstName: "Giorgio", lastName: "Biondi", email: "giorgio@biondi.it" },
    { id: 8, username: 'giorgioverdi', firstName: "Giorgio", lastName: "Verdi", email: "giorgio@verdi.it" }
];

const attachments = [
    { id: 1, userId: 1, name: "Lapo Elkann", filename: "johnelkann.jpg" },
    { id: 2, userId: 2, name: "John Elkann", filename: "johnelkann.jpg" },
    { id: 3, userId: 5, name: "Giorgio Rossi", filename: "giorgiorossi.jpg" },
    { id: 4, userId: 6, name: "Giorgio Bianchi", filename: "giorgiobianchi.jpg" }
];

const otas = [
    { id: 1, name: "Booking", imgUrl: "" },
    { id: 2, name: "AirBnb", imgUrl: "" },
    { id: 3, name: "Expedia", imgUrl: "" },
    { id: 4, name: "TripAdvisor", imgUrl: "" }
];

const structures = [
    { id: 1, userId: 1, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Residenza degli Admin", address: "Via Melo 13, 70128, Bari", fromDate: new Date() },
    { id: 2, userId: 1, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Corte Amministrativa", address: "Via Admin 15, 70128, Bari", fromDate: new Date() },
    { id: 3, userId: 1, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Villa Augusta", address: "Via delle Vie 1, 70128, Bari", fromDate: new Date() },
    { id: 4, userId: 2, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Residenza Test", address: "Via Nazionale 1, 70128, Bari", fromDate: new Date() },
    { id: 5, userId: 2, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Corte di Testing", address: "Via Regionale 2, 70128, Bari", fromDate: new Date() },
    { id: 6, userId: 2, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Villa Testarda", address: "Contrada del Granduca 5, 70128, Bari", fromDate: new Date() },
    { id: 7, userId: 3, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Residenza del Manager", address: "Via Manager 123, 70128, Bari", fromDate: new Date() },
    { id: 8, userId: 3, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Casa del Dipendente", address: "Via Dipendente 456, 70128, Bari", fromDate: new Date() },
    { id: 9, userId: 3, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Villa dei Dipendenti", address: "Via Dipendenti 789, 70128, Bari", fromDate: new Date() },
    { id: 10, userId: 2, imageUrl: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", name: "Casa dell'Agente", address: "Via dell'Agente 101, 70128, Bari", fromDate: new Date() }
];

const balanceData = [
    {
        "id": 1,
        "month": "January",
        "totalAmount": 1000,
        "commission": 50,
        "netAmount": 950
    },
    {
        "id": 2,
        "month": "February",
        "totalAmount": 1200,
        "commission": 60,
        "netAmount": 1140
    },
    {
        "id": 3,
        "month": "March",
        "totalAmount": 800,
        "commission": 40,
        "netAmount": 760
    },
    {
        "id": 4,
        "month": "April",
        "totalAmount": 1500,
        "commission": 75,
        "netAmount": 1425
    },
    {
        "id": 5,
        "month": "May",
        "totalAmount": 1100,
        "commission": 55,
        "netAmount": 1045
    },
    {
        "id": 6,
        "month": "June",
        "totalAmount": 1350,
        "commission": 67.5,
        "netAmount": 1282.5
    },
    {
        "id": 7,
        "month": "July",
        "totalAmount": 950,
        "commission": 47.5,
        "netAmount": 902.5
    },
    {
        "id": 8,
        "month": "August",
        "totalAmount": 1250,
        "commission": 62.5,
        "netAmount": 1187.5
    },
    {
        "id": 9,
        "month": "September",
        "totalAmount": 1050,
        "commission": 52.5,
        "netAmount": 997.5
    },
    {
        "id": 10,
        "month": "October",
        "totalAmount": 1400,
        "commission": 70,
        "netAmount": 1330
    }
]


const bookings = [
    {
        id: 1,
        structureId: 3,
        otaId: 3,
        customerId: 7,
        from: "2024-12-31T16:05:56.721Z",
        to: "2024-09-23T01:27:05.361Z",
        amount: 89,
        guests: 2
    },
    {
        id: 2,
        structureId: 5,
        otaId: 1,
        customerId: 5,
        from: "2024-05-06T10:26:07.056Z",
        to: "2024-12-25T05:03:03.297Z",
        amount: 119,
        guests: 6
    },
    {
        id: 3,
        structureId: 2,
        otaId: 3,
        customerId: 2,
        from: "2024-07-25T13:15:17.610Z",
        to: "2024-10-10T13:51:44.620Z",
        amount: 139,
        guests: 2
    },
    {
        id: 4,
        structureId: 3,
        otaId: 4,
        customerId: 7,
        from: "2024-04-26T07:23:36.660Z",
        to: "2024-09-26T02:36:01.204Z",
        amount: 65,
        guests: 4
    },
    {
        id: 5,
        structureId: 8,
        otaId: 3,
        customerId: 8,
        from: "2024-04-28T22:15:29.218Z",
        to: "2024-06-19T19:17:13.809Z",
        amount: 384,
        guests: 6
    },
    {
        id: 6,
        structureId: 7,
        otaId: 3,
        customerId: 2,
        from: "2024-06-19T00:03:28.223Z",
        to: "2025-01-15T06:08:44.133Z",
        amount: 316,
        guests: 8
    },
    {
        id: 7,
        structureId: 4,
        otaId: 3,
        customerId: 2,
        from: "2025-01-22T04:31:33.144Z",
        to: "2024-09-18T19:54:23.068Z",
        amount: 224,
        guests: 2
    },
    {
        id: 8,
        structureId: 9,
        otaId: 3,
        customerId: 7,
        from: "2024-11-20T22:18:41.262Z",
        to: "2024-12-07T21:04:29.072Z",
        amount: 53,
        guests: 8
    },
    {
        id: 9,
        structureId: 8,
        otaId: 4,
        customerId: 5,
        from: "2025-03-15T15:55:46.624Z",
        to: "2024-04-30T15:39:18.689Z",
        amount: 262,
        guests: 6
    },
    {
        id: 10,
        structureId: 6,
        otaId: 1,
        customerId: 4,
        from: "2025-02-19T18:15:24.973Z",
        to: "2024-11-12T02:57:29.390Z",
        amount: 235,
        guests: 6
    },
    {
        id: 11,
        structureId: 6,
        otaId: 3,
        customerId: 4,
        from: "2024-07-19T23:22:03.333Z",
        to: "2024-07-26T03:46:55.441Z",
        amount: 499,
        guests: 4
    },
    {
        id: 12,
        structureId: 5,
        otaId: 3,
        customerId: 4,
        from: "2024-12-09T21:13:32.059Z",
        to: "2024-06-25T03:16:13.409Z",
        amount: 277,
        guests: 2
    },
    {
        id: 13,
        structureId: 3,
        otaId: 3,
        customerId: 7,
        from: "2024-10-24T18:24:17.549Z",
        to: "2025-04-20T12:10:44.593Z",
        amount: 303,
        guests: 7
    },
    {
        id: 14,
        structureId: 5,
        otaId: 3,
        customerId: 3,
        from: "2025-04-12T12:21:50.725Z",
        to: "2025-01-25T09:31:47.796Z",
        amount: 161,
        guests: 6
    },
    {
        id: 15,
        structureId: 8,
        otaId: 4,
        customerId: 3,
        from: "2024-06-25T19:46:52.085Z",
        to: "2025-02-25T13:58:09.366Z",
        amount: 306,
        guests: 3
    },
    {
        id: 16,
        structureId: 7,
        otaId: 1,
        customerId: 1,
        from: "2025-04-23T00:22:01.054Z",
        to: "2024-08-11T17:56:35.612Z",
        amount: 225,
        guests: 5
    },
    {
        id: 17,
        structureId: 7,
        otaId: 1,
        customerId: 1,
        from: "2024-05-25T05:28:33.908Z",
        to: "2024-07-25T11:42:32.061Z",
        amount: 342,
        guests: 1
    },
    {
        id: 18,
        structureId: 10,
        otaId: 1,
        customerId: 2,
        from: "2024-07-21T10:17:52.452Z",
        to: "2024-07-31T09:10:28.142Z",
        amount: 472,
        guests: 4
    },
    {
        id: 19,
        structureId: 8,
        otaId: 3,
        customerId: 3,
        from: "2025-01-18T02:01:15.573Z",
        to: "2025-02-23T22:24:00.639Z",
        amount: 464,
        guests: 7
    },
    {
        id: 20,
        structureId: 5,
        otaId: 2,
        customerId: 1,
        from: "2024-09-22T10:55:02.350Z",
        to: "2024-10-31T00:39:33.274Z",
        amount: 268,
        guests: 1
    },
    {
        id: 21,
        structureId: 1,
        otaId: 4,
        customerId: 3,
        from: "2024-08-10T18:51:01.260Z",
        to: "2024-05-28T11:45:06.151Z",
        amount: 118,
        guests: 6
    },
    {
        id: 22,
        structureId: 3,
        otaId: 4,
        customerId: 8,
        from: "2024-08-08T08:06:07.821Z",
        to: "2024-11-20T14:46:11.880Z",
        amount: 305,
        guests: 4
    },
    {
        id: 23,
        structureId: 6,
        otaId: 2,
        customerId: 8,
        from: "2024-11-09T15:09:57.640Z",
        to: "2025-02-18T09:41:36.012Z",
        amount: 453,
        guests: 5
    },
    {
        id: 24,
        structureId: 8,
        otaId: 4,
        customerId: 1,
        from: "2024-12-29T18:31:54.247Z",
        to: "2024-06-18T11:27:12.178Z",
        amount: 233,
        guests: 7
    },
    {
        id: 25,
        structureId: 1,
        otaId: 4,
        customerId: 8,
        from: "2024-09-23T16:24:28.783Z",
        to: "2025-01-09T14:10:35.034Z",
        amount: 97,
        guests: 2
    },
    {
        id: 26,
        structureId: 7,
        otaId: 2,
        customerId: 2,
        from: "2024-08-26T17:36:11.129Z",
        to: "2024-07-26T16:57:09.174Z",
        amount: 72,
        guests: 4
    },
    {
        id: 27,
        structureId: 6,
        otaId: 1,
        customerId: 6,
        from: "2024-05-03T00:44:18.817Z",
        to: "2025-01-06T14:53:05.256Z",
        amount: 369,
        guests: 3
    },
    {
        id: 28,
        structureId: 7,
        otaId: 1,
        customerId: 5,
        from: "2024-08-16T05:17:18.449Z",
        to: "2024-05-15T21:53:41.251Z",
        amount: 99,
        guests: 3
    },
    {
        id: 29,
        structureId: 3,
        otaId: 2,
        customerId: 5,
        from: "2024-07-25T20:19:13.444Z",
        to: "2024-06-14T13:04:39.020Z",
        amount: 437,
        guests: 1
    },
    {
        id: 30,
        structureId: 3,
        otaId: 2,
        customerId: 1,
        from: "2024-05-14T02:32:02.999Z",
        to: "2024-09-03T16:29:46.896Z",
        amount: 449,
        guests: 7
    },
    {
        id: 31,
        structureId: 8,
        otaId: 1,
        customerId: 4,
        from: "2024-10-17T10:59:55.409Z",
        to: "2024-07-12T02:35:33.203Z",
        amount: 335,
        guests: 1
    },
    {
        id: 32,
        structureId: 9,
        otaId: 3,
        customerId: 1,
        from: "2024-06-05T03:46:38.321Z",
        to: "2024-07-06T22:02:53.956Z",
        amount: 138,
        guests: 4
    },
    {
        id: 33,
        structureId: 1,
        otaId: 1,
        customerId: 1,
        from: "2025-02-27T07:49:26.489Z",
        to: "2025-03-21T01:56:24.215Z",
        amount: 517,
        guests: 3
    },
    {
        id: 34,
        structureId: 4,
        otaId: 1,
        customerId: 5,
        from: "2024-12-04T23:32:49.968Z",
        to: "2024-07-28T06:22:45.844Z",
        amount: 388,
        guests: 2
    },
    {
        id: 35,
        structureId: 8,
        otaId: 1,
        customerId: 6,
        from: "2024-12-29T00:28:18.216Z",
        to: "2024-07-15T08:48:23.718Z",
        amount: 124,
        guests: 7
    },
    {
        id: 36,
        structureId: 6,
        otaId: 2,
        customerId: 3,
        from: "2025-03-17T08:51:01.969Z",
        to: "2024-12-08T16:25:04.644Z",
        amount: 255,
        guests: 5
    },
    {
        id: 37,
        structureId: 2,
        otaId: 3,
        customerId: 1,
        from: "2024-09-29T20:39:31.724Z",
        to: "2024-11-09T06:09:02.231Z",
        amount: 138,
        guests: 2
    },
    {
        id: 38,
        structureId: 10,
        otaId: 1,
        customerId: 8,
        from: "2025-01-24T21:35:44.305Z",
        to: "2025-03-07T06:59:11.618Z",
        amount: 524,
        guests: 6
    },
    {
        id: 39,
        structureId: 7,
        otaId: 3,
        customerId: 7,
        from: "2024-05-07T12:22:02.254Z",
        to: "2025-04-09T14:27:57.055Z",
        amount: 179,
        guests: 5
    },
    {
        id: 40,
        structureId: 7,
        otaId: 4,
        customerId: 8,
        from: "2024-05-30T06:52:26.699Z",
        to: "2024-07-12T21:01:43.668Z",
        amount: 323,
        guests: 1
    },
    {
        id: 41,
        structureId: 7,
        otaId: 2,
        customerId: 5,
        from: "2024-05-23T20:57:52.360Z",
        to: "2024-11-26T08:27:29.955Z",
        amount: 505,
        guests: 2
    },
    {
        id: 42,
        structureId: 8,
        otaId: 2,
        customerId: 7,
        from: "2025-03-25T08:56:28.254Z",
        to: "2025-02-21T11:00:39.756Z",
        amount: 407,
        guests: 7
    },
    {
        id: 43,
        structureId: 3,
        otaId: 3,
        customerId: 2,
        from: "2024-10-22T06:19:07.029Z",
        to: "2024-11-20T15:00:50.393Z",
        amount: 511,
        guests: 2
    },
    {
        id: 44,
        structureId: 7,
        otaId: 2,
        customerId: 2,
        from: "2024-12-25T04:10:20.368Z",
        to: "2024-06-13T01:41:31.615Z",
        amount: 77,
        guests: 6
    },
    {
        id: 45,
        structureId: 6,
        otaId: 2,
        customerId: 2,
        from: "2024-12-07T15:23:14.789Z",
        to: "2024-06-11T02:41:10.025Z",
        amount: 287,
        guests: 8
    },
    {
        id: 46,
        structureId: 4,
        otaId: 1,
        customerId: 2,
        from: "2024-09-23T23:30:55.073Z",
        to: "2024-04-29T16:16:41.057Z",
        amount: 127,
        guests: 5
    },
    {
        id: 47,
        structureId: 8,
        otaId: 3,
        customerId: 7,
        from: "2025-01-12T05:59:15.023Z",
        to: "2024-08-25T20:31:42.779Z",
        amount: 79,
        guests: 8
    },
    {
        id: 48,
        structureId: 5,
        otaId: 2,
        customerId: 4,
        from: "2024-06-26T22:49:37.984Z",
        to: "2024-05-30T13:14:58.194Z",
        amount: 511,
        guests: 4
    },
    {
        id: 49,
        structureId: 6,
        otaId: 4,
        customerId: 3,
        from: "2025-01-04T05:55:45.026Z",
        to: "2024-12-03T22:55:58.552Z",
        amount: 133,
        guests: 1
    },
    {
        id: 50,
        structureId: 9,
        otaId: 3,
        customerId: 2,
        from: "2024-11-07T20:14:24.856Z",
        to: "2024-12-13T11:07:15.384Z",
        amount: 253,
        guests: 6
    },
    {
        id: 51,
        structureId: 7,
        otaId: 2,
        customerId: 8,
        from: "2024-06-19T10:55:24.838Z",
        to: "2025-04-05T17:29:01.276Z",
        amount: 361,
        guests: 7
    },
    {
        id: 52,
        structureId: 3,
        otaId: 1,
        customerId: 3,
        from: "2024-11-24T09:31:31.307Z",
        to: "2025-01-31T17:23:45.987Z",
        amount: 379,
        guests: 1
    },
    {
        id: 53,
        structureId: 8,
        otaId: 1,
        customerId: 4,
        from: "2024-09-19T10:01:55.951Z",
        to: "2025-02-28T10:17:31.011Z",
        amount: 53,
        guests: 5
    },
    {
        id: 54,
        structureId: 1,
        otaId: 3,
        customerId: 3,
        from: "2024-06-27T08:09:19.836Z",
        to: "2024-12-11T01:02:25.175Z",
        amount: 198,
        guests: 3
    },
    {
        id: 55,
        structureId: 7,
        otaId: 2,
        customerId: 7,
        from: "2025-01-17T22:59:39.178Z",
        to: "2025-04-18T19:46:59.495Z",
        amount: 68,
        guests: 4
    },
    {
        id: 56,
        structureId: 2,
        otaId: 2,
        customerId: 1,
        from: "2024-10-11T12:03:22.649Z",
        to: "2024-12-25T04:09:23.731Z",
        amount: 477,
        guests: 8
    },
    {
        id: 57,
        structureId: 5,
        otaId: 2,
        customerId: 6,
        from: "2025-02-06T17:52:43.615Z",
        to: "2024-10-19T10:02:20.088Z",
        amount: 356,
        guests: 3
    },
    {
        id: 58,
        structureId: 5,
        otaId: 2,
        customerId: 7,
        from: "2024-08-27T05:25:22.083Z",
        to: "2025-01-06T15:43:47.044Z",
        amount: 259,
        guests: 4
    },
    {
        id: 59,
        structureId: 9,
        otaId: 4,
        customerId: 8,
        from: "2024-09-27T04:13:09.121Z",
        to: "2024-08-14T04:23:06.437Z",
        amount: 275,
        guests: 5
    },
    {
        id: 60,
        structureId: 4,
        otaId: 3,
        customerId: 5,
        from: "2024-08-15T13:01:50.370Z",
        to: "2024-06-11T21:18:51.157Z",
        amount: 379,
        guests: 6
    },
    {
        id: 61,
        structureId: 8,
        otaId: 3,
        customerId: 2,
        from: "2024-06-27T23:52:20.960Z",
        to: "2025-03-29T20:30:14.181Z",
        amount: 75,
        guests: 2
    },
    {
        id: 62,
        structureId: 3,
        otaId: 1,
        customerId: 3,
        from: "2024-12-11T00:00:54.788Z",
        to: "2024-07-13T18:03:00.222Z",
        amount: 512,
        guests: 2
    },
    {
        id: 63,
        structureId: 10,
        otaId: 3,
        customerId: 1,
        from: "2024-06-15T23:50:28.186Z",
        to: "2024-06-07T20:42:27.024Z",
        amount: 132,
        guests: 4
    },
    {
        id: 64,
        structureId: 2,
        otaId: 3,
        customerId: 1,
        from: "2025-01-27T18:07:45.940Z",
        to: "2024-09-12T05:52:22.727Z",
        amount: 125,
        guests: 4
    },
    {
        id: 65,
        structureId: 6,
        otaId: 2,
        customerId: 7,
        from: "2024-12-16T03:58:50.697Z",
        to: "2024-05-14T06:26:45.642Z",
        amount: 264,
        guests: 2
    },
    {
        id: 66,
        structureId: 7,
        otaId: 2,
        customerId: 5,
        from: "2024-05-12T10:20:48.838Z",
        to: "2025-02-12T16:15:07.341Z",
        amount: 234,
        guests: 8
    },
    {
        id: 67,
        structureId: 8,
        otaId: 4,
        customerId: 7,
        from: "2024-11-02T17:24:06.347Z",
        to: "2024-06-18T20:15:27.113Z",
        amount: 165,
        guests: 7
    },
    {
        id: 68,
        structureId: 2,
        otaId: 2,
        customerId: 4,
        from: "2024-07-10T04:17:44.975Z",
        to: "2024-04-24T06:20:43.380Z",
        amount: 191,
        guests: 2
    },
    {
        id: 69,
        structureId: 3,
        otaId: 4,
        customerId: 1,
        from: "2025-04-16T20:59:30.949Z",
        to: "2025-03-19T10:30:44.175Z",
        amount: 452,
        guests: 2
    },
    {
        id: 70,
        structureId: 10,
        otaId: 3,
        customerId: 5,
        from: "2024-07-02T20:38:11.129Z",
        to: "2025-01-06T20:22:58.342Z",
        amount: 430,
        guests: 8
    },
    {
        id: 71,
        structureId: 4,
        otaId: 4,
        customerId: 6,
        from: "2024-10-30T04:45:02.767Z",
        to: "2024-07-03T20:36:48.460Z",
        amount: 93,
        guests: 7
    },
    {
        id: 72,
        structureId: 4,
        otaId: 4,
        customerId: 1,
        from: "2024-10-13T20:53:13.937Z",
        to: "2024-07-11T22:42:06.532Z",
        amount: 428,
        guests: 1
    },
    {
        id: 73,
        structureId: 2,
        otaId: 2,
        customerId: 2,
        from: "2024-07-22T22:18:35.250Z",
        to: "2024-12-20T07:22:53.820Z",
        amount: 153,
        guests: 4
    },
    {
        id: 74,
        structureId: 4,
        otaId: 4,
        customerId: 6,
        from: "2024-07-27T18:13:41.384Z",
        to: "2024-06-30T12:11:05.034Z",
        amount: 296,
        guests: 3
    },
    {
        id: 75,
        structureId: 3,
        otaId: 1,
        customerId: 2,
        from: "2025-03-18T06:32:09.602Z",
        to: "2024-11-03T23:12:21.928Z",
        amount: 235,
        guests: 3
    },
    {
        id: 76,
        structureId: 7,
        otaId: 1,
        customerId: 1,
        from: "2024-07-06T19:55:50.234Z",
        to: "2024-08-18T08:11:43.364Z",
        amount: 253,
        guests: 2
    },
    {
        id: 77,
        structureId: 8,
        otaId: 4,
        customerId: 4,
        from: "2024-05-07T10:41:07.557Z",
        to: "2024-12-26T10:50:21.846Z",
        amount: 347,
        guests: 2
    },
    {
        id: 78,
        structureId: 4,
        otaId: 1,
        customerId: 5,
        from: "2024-09-01T00:21:16.130Z",
        to: "2024-05-03T15:16:56.275Z",
        amount: 85,
        guests: 2
    },
    {
        id: 79,
        structureId: 4,
        otaId: 4,
        customerId: 1,
        from: "2024-06-07T19:15:58.285Z",
        to: "2024-10-24T15:59:17.208Z",
        amount: 67,
        guests: 4
    },
    {
        id: 80,
        structureId: 2,
        otaId: 1,
        customerId: 7,
        from: "2025-01-25T21:41:46.898Z",
        to: "2024-04-25T19:29:17.904Z",
        amount: 479,
        guests: 8
    },
    {
        id: 81,
        structureId: 7,
        otaId: 3,
        customerId: 3,
        from: "2024-07-16T00:15:26.165Z",
        to: "2025-03-07T17:41:24.566Z",
        amount: 535,
        guests: 2
    },
    {
        id: 82,
        structureId: 1,
        otaId: 1,
        customerId: 4,
        from: "2025-04-20T02:07:39.637Z",
        to: "2025-01-16T17:05:33.450Z",
        amount: 321,
        guests: 3
    },
    {
        id: 83,
        structureId: 7,
        otaId: 2,
        customerId: 5,
        from: "2024-10-01T03:38:05.359Z",
        to: "2025-01-21T17:30:17.228Z",
        amount: 524,
        guests: 1
    },
    {
        id: 84,
        structureId: 3,
        otaId: 3,
        customerId: 1,
        from: "2024-07-27T14:22:58.502Z",
        to: "2025-03-17T21:27:09.936Z",
        amount: 414,
        guests: 2
    },
    {
        id: 85,
        structureId: 7,
        otaId: 4,
        customerId: 2,
        from: "2024-06-19T00:55:29.529Z",
        to: "2024-06-02T20:45:51.861Z",
        amount: 388,
        guests: 4
    },
    {
        id: 86,
        structureId: 10,
        otaId: 2,
        customerId: 5,
        from: "2025-02-15T04:41:35.727Z",
        to: "2025-01-28T06:18:28.656Z",
        amount: 460,
        guests: 6
    },
    {
        id: 87,
        structureId: 8,
        otaId: 1,
        customerId: 4,
        from: "2024-05-24T10:26:48.060Z",
        to: "2025-03-23T08:19:53.211Z",
        amount: 310,
        guests: 1
    },
    {
        id: 88,
        structureId: 6,
        otaId: 1,
        customerId: 2,
        from: "2025-02-21T17:35:05.133Z",
        to: "2024-12-07T18:35:53.100Z",
        amount: 302,
        guests: 3
    },
    {
        id: 89,
        structureId: 3,
        otaId: 2,
        customerId: 6,
        from: "2024-05-24T10:55:24.406Z",
        to: "2024-05-20T03:40:44.219Z",
        amount: 357,
        guests: 1
    },
    {
        id: 90,
        structureId: 10,
        otaId: 3,
        customerId: 5,
        from: "2024-05-09T21:43:21.909Z",
        to: "2024-12-22T13:58:58.858Z",
        amount: 264,
        guests: 3
    },
    {
        id: 91,
        structureId: 8,
        otaId: 3,
        customerId: 7,
        from: "2024-08-19T07:46:17.567Z",
        to: "2024-10-08T08:23:02.486Z",
        amount: 66,
        guests: 7
    },
    {
        id: 92,
        structureId: 3,
        otaId: 3,
        customerId: 3,
        from: "2024-12-31T21:05:24.748Z",
        to: "2025-02-07T13:42:49.117Z",
        amount: 218,
        guests: 8
    },
    {
        id: 93,
        structureId: 7,
        otaId: 4,
        customerId: 2,
        from: "2024-06-07T07:57:01.738Z",
        to: "2024-06-23T01:43:56.282Z",
        amount: 465,
        guests: 2
    },
    {
        id: 94,
        structureId: 9,
        otaId: 3,
        customerId: 1,
        from: "2025-02-26T23:24:16.440Z",
        to: "2024-05-30T02:04:15.832Z",
        amount: 215,
        guests: 5
    },
    {
        id: 95,
        structureId: 4,
        otaId: 2,
        customerId: 3,
        from: "2024-05-29T22:49:17.527Z",
        to: "2024-09-22T06:11:27.653Z",
        amount: 126,
        guests: 1
    },
    {
        id: 96,
        structureId: 5,
        otaId: 2,
        customerId: 8,
        from: "2024-12-28T06:19:12.847Z",
        to: "2024-04-28T14:43:51.461Z",
        amount: 503,
        guests: 8
    },
    {
        id: 97,
        structureId: 7,
        otaId: 2,
        customerId: 2,
        from: "2025-04-05T07:51:21.139Z",
        to: "2024-11-29T22:46:22.734Z",
        amount: 272,
        guests: 1
    },
    {
        id: 98,
        structureId: 9,
        otaId: 4,
        customerId: 1,
        from: "2024-08-12T20:50:18.546Z",
        to: "2024-12-03T13:20:07.700Z",
        amount: 95,
        guests: 1
    },
    {
        id: 99,
        structureId: 10,
        otaId: 3,
        customerId: 5,
        from: "2025-02-02T23:22:50.548Z",
        to: "2025-02-06T15:36:20.793Z",
        amount: 71,
        guests: 8
    },
    {
        id: 100,
        structureId: 4,
        otaId: 1,
        customerId: 5,
        from: "2024-04-28T13:33:34.545Z",
        to: "2025-04-14T17:02:19.438Z",
        amount: 77,
        guests: 6
    }
]


module.exports = { agents, attachments, bookings, customers, otas, structures, users, balanceData };