import NavBar from '../../components/NavBar'
import '../../assets/css/DashBoard/Dashboard.css'

function Dashb_Bancas() {

    return (
        <div >
            <NavBar />
            <div class="container-sm">
                <div class="name">
                    <h3>DashBoard Bancas</h3>
                </div>
                <div class="pesquisa ">
                    <input type="text" class="form-control" placeholder="Buscar Registros"/>
                    <button type="button" class="btn btn-danger">Pesquisar</button>
                </div>
                <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">APRESENTAÇÂO</th>
                            <th scope="col">TCC</th>
                            <th scope="col">MEMBRO 1</th>
                            <th scope="col">MEMBRO 2</th>
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

export default Dashb_Bancas;