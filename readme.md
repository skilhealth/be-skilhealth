# <span style="color:rgb(185 28 28);">Skilhealth</span>

SKILHEALTH adalah Aplikasi Kesehatan Online yang memberikan pelayanan kepada pasien, dimana tujuan utamanya adalah, pasien dapat melakukan reservasi jadwal bersama dokter tanpa harus secara langsung ke rumah sakit.

## <span style="color:rgb(185 28 28);">Web Link</span>

    https://be-skilhealth.up.railway.app/

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

## Create another new Thing

### Request

`POST /thing/`

    curl -i -H 'Accept: application/json' -d 'name=Bar&junk=rubbish' http://localhost:7000/thing

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {"id":2,"name":"Bar","status":null}

## Get list of Things again

### Request

`GET /thing/`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 74

    [{"id":1,"name":"Foo","status":"new"},{"id":2,"name":"Bar","status":null}]

## Change a Thing's state

### Request

`PUT /thing/:id/status/changed`

    curl -i -H 'Accept: application/json' -X PUT http://localhost:7000/thing/1/status/changed

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"name":"Foo","status":"changed"}

## Get changed Thing

### Request

`GET /thing/id`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"name":"Foo","status":"changed"}

## Change a Thing

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'name=Foo&status=changed2' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed2"}

## Attempt to change a Thing using partial params

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'status=changed3' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed3"}

## Attempt to change a Thing using invalid params

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'id=99&status=changed4' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed4"}

## Change a Thing using the _method hack

### Request

`POST /thing/:id?_method=POST`

    curl -i -H 'Accept: application/json' -X POST -d 'name=Baz&_method=PUT' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Baz","status":"changed4"}

## Change a Thing using the _method hack in the url

### Request

`POST /thing/:id?_method=POST`

    curl -i -H 'Accept: application/json' -X POST -d 'name=Qux' http://localhost:7000/thing/1?_method=PUT

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: text/html;charset=utf-8
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:7000/thing/1/

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 204 No Content
    Connection: close


## Try to delete same Thing again

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:7000/thing/1/

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Get deleted Thing

### Request

`GET /thing/1`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing using the _method hack

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X POST -d'_method=DELETE' http://localhost:7000/thing/2/

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 204 No Content
    Connection: close