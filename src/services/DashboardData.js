const DatabaseInfo =  async () => {
    const response = await fetch("https://greinaresdashboardreactbackend-hjduehcge5gvefcj.westus-01.azurewebsites.net/dashboard/dashboard")
    const data = await response.json();

    return data
}


export {DatabaseInfo}