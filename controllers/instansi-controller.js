const Instansi = require("../models/instansi")

module.exports = {
   getAllInstansi: async (req, res) => {
    const instansi = await Instansi.findAll()

    res.json({
        message: " berhasil mendapatkan data Instansi",
        data: instansi
    })
   },

   getInstansiById: async (req, res) => {
    try {
          // Ambil ID instansi dari parameter rute
          const instansiId = req.params.id;

          // cari instansi berdasarkan ID
          const instansi = await Instansi.finById(instansiId);

           // Periksa apakah instansi ditemukan
         if (!instansi) {
        return res.status(404).json({ message: 'instansi not found' });
      }
     }catch (error) {
        console.error('Error getting instansi by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }

    },

    createInstansi: async (req, res) => {
      try {
        const {nama, alamat, no_tlpn, area, email, image, url} = req.body;

        const newInstansi = await Instansi.create({
          nama,
          alamat,
          no_tlpn,
          area,
          email,
          image,
          url
        });

        res.status(201).json({message: "Intansi berhasil ditambahkan", instansi: newInstansi})
      } catch (error) {
        console.error(error);
        res.status(500).json({message: "Gagal membuat instansi baru"})
      }

      },

     updateInstansi: async (req, res) => {
     
     },

     deleteInstansi: async (req, res) => {
     
     },

     searchInstansiByAlamat: async (req, res) => {
     
     },
     searchInstansiByName: async (req, res) => {
     
     },
     searchInstansiByJarak: async (req, res) => {
     
     },
     searchInstansiByArea: async (req, res) => {
     
     }
}

    