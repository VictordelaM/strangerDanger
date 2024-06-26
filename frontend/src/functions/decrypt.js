export const decryptToken = () => {
    const token = localStorage.getItem('token')
    const parts = token.split('.');
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));
    return { header, payload };
  }