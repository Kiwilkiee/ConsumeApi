import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Api from '../api';

function Home() {

    const [siswa, setSiswa] = useState([]);
    // di sini manggil apinya jangan lupa import dulu sama kasih constnya 
    useEffect(() => {
        Api.get('/siswa')
        .then(response => {
            setSiswa(response.data);     
        })
    }, []);

    // sampeee siniii get nya
    
    // ini postnnyaaa
    const [formData, setFormData] = useState({
        nama: '',
        nis: '',
        kelas: '',
      });

      // enih buat ngehandel inputnya
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      //enih buat submitnya 
      const tambahSiswa = async (e) => {
        e.preventDefault();
    
        try {
          await Api.post('/siswa', formData);
          alert ("anjay bisa")
        } catch (error) {
          console.error('Error adding student:', error);
        }
      };
   
  return (
    <> 
    
    {/* inii formnya buat nambahin sis siwanya */}
    <form onSubmit={tambahSiswa}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputNama"
            name="nama"
            placeholder="Nama"
            value={formData.nama}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInputNama">Nama</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInputNis"
            name="nis"
            placeholder="NIS"
            value={formData.nis}
            onChange={handleInputChange}
          />
          <label for="floatingInputNis">NIS</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputKelas"
            name="kelas"
            placeholder="Kelas"
            // ada ini nih
            value={formData.kelas}
            // sama iniii
            onChange={handleInputChange}
          />
          <label for="floatingInputKelas">Kelas</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* sampe sini formnya kalo gamau panjang bisa aja cuman asal ada ini nih yang di tandain */}

    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            {/* data siswanya ini yang buat di tampiin */}
            {siswa.map((siswa) => (

            <tr key={siswa.id}>
            <th scope="row">{siswa.id}</th>
            <td>{siswa.nama}</td>
            <td>{siswa.nis}</td>
            <td>{siswa.kelas}</td>
            </tr>
            ))}
            <tr>
            
            </tr>
        </tbody>
        </table>
    </>
  )
}

export default Home