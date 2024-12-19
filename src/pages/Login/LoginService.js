import axios from "axios";

class LoginService {
  getAuthenticatedData() {
    const data = sessionStorage.getItem("user-data");
    return data ? JSON.parse(data) : null;
  }

  isAuthenticated() {
    return this.getAuthenticatedData() !== null;
  }

  logout() {
    sessionStorage.removeItem("user-data");
  }

  login(username, password, onSuccess, onError) {
    const formData = new URLSearchParams();
    formData.append("login", username);
    formData.append("senha", password);

    axios
      .post("http://localhost:8083/gtcc/auth/login", formData)
      .then((response) => {
        if (response.status !== 200) {
          onError(`Erro na autenticação: ${response.statusText}`);
          return;
        }
        sessionStorage.setItem("user-data", JSON.stringify(response.data));
        onSuccess();
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "Usuário/Senha Inválidos!";
        onError(errorMessage);
      });
  }
}

export default new LoginService();
