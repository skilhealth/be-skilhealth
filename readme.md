# <font color="rgb(185 28 28)">Skilhealth</font>

SKILHEALTH adalah Aplikasi Kesehatan Online yang memberikan pelayanan kepada pasien, dimana tujuan utamanya adalah, pasien dapat melakukan reservasi jadwal bersama dokter tanpa harus secara langsung ke rumah sakit.

## <span style="color:rgb(185 28 28);">Web Link</span>

    https://be-skilhealth.up.railway.app/

## Doctor Accounts

### Dokter Andi
email:      doctor1@gmail.com<br/>
password:   doctor1

### Dokter Joko
email:      doctor8@gmail.com<br/>
password:   doctor8

## Register

### Request

`GET /auth/register`

### Response

    -

## Login

### Request

`GET /auth/login`

### Response

    -

## <span style="color:rgb(185 28 28);">Get Doctors</span>

### Request

`GET /doctors`

### Response

    "message": "Dokter Berhasil ditemukan",
    "data": []

## Get Doctors by ID

### Request

`GET /doctors/:id`

### Response

    {"message": "Dokter Berhasil ditemukan",
    "data": {
        "nama": "Dr. Andi Susanto",
        "id": 1,
        "status": true,
        "deskripsi": "Dr. Andi Susanto adalah seorang dokter spesialis Ortopedi dengan pengalaman lebih dari 15 Tahun tahun. Saat ini, Dr. Andi Susanto berpraktik di Skilvul Hospital Medan di Medan, berfokus pada perawatan personal dan komprehensif. Dengan keterampilan dan pengetahuan terbaru, Dr. Andi Susanto berkomitmen memberikan solusi yang tepat dan perawatan berkualitas tinggi kepada setiap pasien.\r\n",
        "skd": "SKD123",
        "pengalaman": [
        "Rumah Sakit ABC",
        "Rumah Sakit XYZ"
        ],
        "images": "\\images\\dokter\\doctor1.png",
        "pendidikan": [
        "Universitas X",
        "Pelatihan A"
        ],
        "Instansi": {
        "nama": "Skilvul Hospital - Medan"
        },
        "Spesiali": {
        "nama": "Ortopedi"
        },
        "Jadwals": [
        {
            "id": 1,
            "date": "2023-12-04T00:00:00.000Z",
            "tipe": "reguler",
            "status": true,
            "harga": 100000
        },
        {
            "id": 2,
            "date": "2023-12-05T00:00:00.000Z",
            "tipe": "daring",
            "status": true,
            "harga": 120000
        },
        {
            "id": 3,
            "date": "2023-12-07T00:00:00.000Z",
            "tipe": "homecare",
            "status": true,
            "harga": 150000
        },
        {
            "id": 4,
            "date": "2023-12-10T00:00:00.000Z",
            "tipe": "reguler",
            "status": true,
            "harga": 110000
        }
        ]
    }
}

## Add Doctor

### Request

`POST /doctors/add`

### Response

    {
    "message": "Berhasil Menambahkan Dokter",
    "data": {
        "id": 11,
        "nama": "Dr. Rivai",
        "deskripsi": "Dr. Rivai adalah seorang dokter spesialis mata dengan pengalaman lebih dari 9 tahun. Saat ini, Dr. Rivai berpraktik di Skilvul Hospital Medan, berfokus pada perawatan personal dan komprehensif. Dengan keterampilan dan pengetahuan terbaru, Dr. Rivai berkomitmen memberikan solusi yang tepat dan perawatan berkualitas tinggi kepada setiap pasien.\r\n",
        "skd": "SKD456",
        "pengalaman": [
        "Rumah Sakit ABC",
        "Rumah Sakit XYZ"
        ],
        "pendidikan": [
        "Universitas X",
        "Pelatihan A"
        ],
        "status": true,
        "images": "\\images\\dokter\\doctor1.png",
        "updatedAt": "2023-12-05T15:53:33.979Z",
        "createdAt": "2023-12-05T15:53:33.979Z"
    }
    }

## Search Doctor (Mobile)

### Request

`POST /doctors/search`

### Response

    {"message": "Dokter Tidak Ditemukan"}

## Get All Instansi

### Request

`GET /instansi`

### Response

    [
    {
        "id": 1,
        "nama": "Skilvul Hospital - Jakarta",
        "alamat": "Alamat Rumah Sakit Jakarta",
        "no_tlp": "123456789",
        "area": "Jakarta",
        "email": "skilvul_jakarta@example.com",
        "image": "",
        "createdAt": null,
        "updatedAt": null
    },
    {
        "id": 2,
        "nama": "Skilvul Hospital - Surabaya",
        "alamat": "Alamat Rumah Sakit Surabaya",
        "no_tlp": "987654321",
        "area": "Surabaya",
        "email": "skilvul_surabaya@example.com",
        "image": "",
        "createdAt": null,
        "updatedAt": null
    },
    {
        "id": 3,
        "nama": "Skilvul Hospital - Samarinda",
        "alamat": "Alamat Rumah Sakit Samarinda",
        "no_tlp": "111222333",
        "area": "Samarinda",
        "email": "skilvul_samarinda@example.com",
        "image": "",
        "createdAt": null,
        "updatedAt": null
    },
    {
        "id": 4,
        "nama": "Skilvul Hospital - Medan",
        "alamat": "Alamat Rumah Sakit Medan",
        "no_tlp": "444555666",
        "area": "Medan",
        "email": "skilvul_medan@example.com",
        "image": "",
        "createdAt": null,
        "updatedAt": null
    }
    ]

## Get Instansi by ID

### Request

`GET /instansi/:id`

### Response

    {
        "id": 1,
        "nama": "Skilvul Hospital - Jakarta",
        "alamat": "Alamat Rumah Sakit Jakarta",
        "no_tlp": "123456789",
        "area": "Jakarta",
        "email": "skilvul_jakarta@example.com",
        "image": "",
        "createdAt": null,
        "updatedAt": null
    }

## Get Instansi by Nama

### Request

`get /instansi/search-by-name`

### Response

    null

## Get Instansi by Alamat

### Request

`GET /instansi/search-by-alamat`

### Response

    null

## Get Instansi by Area

### Request

`GET /instansi/search-by-area`

### Response

    null

## Add Instansi

### Request

`POST /instansi`

### Response

    -

## Update Instansi

### Request

`PUT /instansi/:id`

### Response

    -

## Delete Instansi

### Request

`DELETE /instansi/:id`

### Response

    -

## Get All user_kredensial

### Request

`GET /users`

### Response

    -

## Get user_kredensial by ID

### Request

`GET /users/:id`

### Response

    -

## Add user_kredensial

### Request

`POST /users`

### Response

    -

## Update user_kredensial

### Request

`PUT users/:id`

### Response

    -

## Delete user_kredensial

### Request

`DELETE /users/:id`

### Response

    -

## Send Email

### Request

`POST /users/email-send`

### Response

    -

## Change Password

### Request

`POST /users/change-password`

### Response

    -

## Get All User

### Request

`GET /user`

### Response

    [
    {
        "id": 1,
        "nama": "Virgiawan Sanria",
        "tgl_lahir": "2003-09-15T00:00:00.000Z",
        "jenis_kelamin": "laki-laki",
        "no_tlp": "08810246567",
        "kredensial_id": 3,
        "images": "/images/users/user.png"
    },
    {
        "id": 2,
        "nama": "Orang Misterius",
        "tgl_lahir": "2006-06-12T00:00:00.000Z",
        "jenis_kelamin": "laki-laki",
        "no_tlp": "084621876238",
        "kredensial_id": 4,
        "images": "/images/users/user.png"
    },
    {
        "id": 3,
        "nama": "SJW Teatan",
        "tgl_lahir": "2003-07-08T00:00:00.000Z",
        "jenis_kelamin": "laki-laki",
        "no_tlp": "0896828782787",
        "kredensial_id": 5,
        "images": "/images/users/user.png"
    },
    {
        "id": 4,
        "nama": "Kaiden Artificial Intelligence",
        "tgl_lahir": "2014-06-17T00:00:00.000Z",
        "jenis_kelamin": "laki-laki",
        "no_tlp": "087298826",
        "kredensial_id": 6,
        "images": "/images/users/user.png"
    },
    {
        "id": 5,
        "nama": "Gabriel",
        "tgl_lahir": "2000-05-02T00:00:00.000Z",
        "jenis_kelamin": "laki-laki",
        "no_tlp": "0870802929878",
        "kredensial_id": 7,
        "images": "/images/users/user.png"
    },
    {
        "id": 6,
        "nama": "Ariel",
        "tgl_lahir": "2023-12-04T00:00:00.000Z",
        "jenis_kelamin": "laki-laki",
        "no_tlp": "085389899996",
        "kredensial_id": 8,
        "images": "/images/users/user.png"
    }
    ]

## Get User by ID

### Request

`GET /user/:id`

### Response

    {
    "id": 1,
    "nama": "Virgiawan Sanria",
    "tgl_lahir": "2003-09-15T00:00:00.000Z",
    "jenis_kelamin": "laki-laki",
    "no_tlp": "08810246567",
    "kredensial_id": 3,
    "images": "/images/users/user.png"
    }

## Add User

### Request

`POST /user`

### Response

    -

## Edit User

### Request

`PUT /user/:id`

### Response

    -

## Delete User by ID

### Request

`DELETE /user/:id`

### Response

    -

## Get All Spesialis

### Request

`GET /spesialis`

### Response

    "data": [
    {
      "id": 1,
      "nama": "Dokter Anak",
      "keterangan": "Spesialis dalam perawatan kesehatan anak-anak",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 2,
      "nama": "Ortopedi",
      "keterangan": "Spesialis dalam bidang penyakit tulang dan muskuloskeletal",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 3,
      "nama": "Psikiatri",
      "keterangan": "Spesialis dalam pengobatan gangguan mental dan emosional",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 4,
      "nama": "Penyakit Dalam",
      "keterangan": "Spesialis dalam penyakit-penyakit internal tubuh manusia",
      "createdAt": null,
      "updatedAt": null
    }
  ]

## Get All Forum

### Request

`GET /forum`

### Response

    {"message": "Successfully retrieved all forums",
    "data": [
        {
        "id": 5,
        "user_id": 3,
        "dokter_id": null,
        "judul": "Sering pingsan dan telapak tangan berair apakah ciri-ciri jantung lemah?",
        "pertanyaan": "Dok apakah orang yang suka pingsan dan sering keringetan di telapak tangannya itu dia punya sakit jantung ya dok? tergolong ciri-ciri jantung lemah gak sih itu dokter? mohon pencerahannya. trims",
        "jawaban": null,
        "status": false,
        "createdAt": "2023-12-04T00:08:40.000Z",
        "updatedAt": "2023-12-04T00:08:40.000Z",
        "Dokter": null,
        "User": {
            "id": 3,
            "nama": "SJW Teatan"
        }
        },
        {
        "id": 4,
        "user_id": 5,
        "dokter_id": null,
        "judul": "Obat disfungsi ereksi yang aman bagi jantung",
        "pertanyaan": "Hi dokter, Dok, saya mau tanya, Saya adalah pria berusia 30 tahun. Saya sebelumnya menderita penyakit jantung. saya khawatir dengan hal ini soalnya saya juga punya kelemahan disfungsi ereksi. Saya ingin menanyakan obat disfungsi ereksi yang aman bagi jantung?",
        "jawaban": null,
        "status": false,
        "createdAt": "2023-12-04T00:06:43.000Z",
        "updatedAt": "2023-12-04T00:06:43.000Z",
        "Dokter": null,
        "User": {
            "id": 5,
            "nama": "Gabriel"
        }
        },
        {
        "id": 3,
        "user_id": 4,
        "dokter_id": null,
        "judul": "Kelopak mata bagian bawah sebelah kiri kedutan",
        "pertanyaan": "Kelopak mata bagian bawah sebelah kiri kedutan.",
        "jawaban": null,
        "status": false,
        "createdAt": "2023-12-04T00:03:44.000Z",
        "updatedAt": "2023-12-04T00:03:44.000Z",
        "Dokter": null,
        "User": {
            "id": 4,
            "nama": "Kaiden Artificial Intelligence"
        }
        },
        {
        "id": 2,
        "user_id": 1,
        "dokter_id": 1,
        "judul": "Kepala bagian kiri sakit,dan belakang mata kiri ikutannya nyeri",
        "pertanyaan": "Hallo doc mau nanya kenapa yak setiap pagi kepala kiri saya sakit,trs diiringin dengan Mata bagian belakang kiri ikutan nyeri? Terima kasih",
        "jawaban": "Hallo juga,Mungkin alasannya dibalik kepala bagian kiri anda nyeri disertai belakang mata nyeri itu karena anda kurangnya tidur atau perubahan pola tidur anda,Guna membantu mengurangi rasa nyeri pada kepala bagian kiri, kamu bisa mencoba beberapa cara perawatan sederhana rumahan, misalnya: \n\nMengompres dingin atau hangat pada bagian kepala yang nyeri.\nMandi dengan air hangat.\nIstirahat cukup, setidaknya 7 sampai 9 jam pada malam hari.\nMendengarkan musik yang lembut dan menenangkan. \nJika memang perlu, kamu bisa mengonsumsi obat yang dijual bebas di apotek, misalnya paracetamol, aspirin, dan ibuprofen. ",
        "status": true,
        "createdAt": "2023-12-03T23:57:43.000Z",
        "updatedAt": "2023-12-04T00:10:19.000Z",
        "Dokter": {
            "id": 1,
            "nama": "Dr. Andi Susanto",
            "Spesiali": {
            "nama": "Ortopedi"
            }
        },
        "User": {
            "id": 1,
            "nama": "Virgiawan Sanria"
        }
        }
    ]
    }

## Add Forum

### Request

`POST /forum`

### Response

    -

## Edit Forum by ID

### Request

`PUT /forum/:id`

### Response

    -

## Get All Booking by User

### Request

`GET /bookings`

### Response

    -

## Get All Booking by Doctor

### Request

`GET /bookings/doctor`

### Response

    -

## Get Booking by ID

### Request

`GET /bookings/:id`

### Response

    -

## Add Booking

### Request

`POST /bookings`

### Response

    -

## Edit Booking

### Request

`PATCH /bookings/:id/edit`

### Response

    -

## Change Booking Status

### Request

`PATCH /bookings/:id/toggle`

### Response

    -

## Refund Booking

### Request

`DELETE /bookings/:id`

### Response

    -

## Get All Uji Lab

### Request

`GET /ujilab`

### Response

    -

## Get Uji Lab by ID

### Request

`GET /ujilab/:id`

### Response

    -

## Add Uji Lab

### Request

`POST /ujilab`

### Response

    -

## Edit Uji Lab

### Request

`POST /ujilab/:id/edit`

### Response

    -

