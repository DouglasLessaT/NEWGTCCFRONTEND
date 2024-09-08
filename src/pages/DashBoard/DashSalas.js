import NavBar from '../../components/NavBar'
import '../../assets/css/DashBoard/Dashboard.css'

function Dashb_Salas() {

    return (
        <div >
            <NavBar />
            <div class="container-sm">
                <div class="name">
                    <h3>DashBoard Salas</h3>
                </div>
                <div class="pesquisa ">
                    <input type="text" class="form-control" placeholder="Buscar Registros"/>
                    <button type="button" class="btn btn-danger">Pesquisar</button>
                </div>
                <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">PRÉDIO</th>
                            <th scope="col">TCC</th>
                            <th scope="col">ANDAR</th>
                            <th scope="col">SALA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

export default Dashb_Salas;