function App() {

    function handleFormData(event) {
        event.preventDefault();
        console.log(event.currentTarget);
        let form = event.currentTarget;
        let formData = new FormData(form);
        console.log(formData.get("email"));
        console.log(formData.get("password"));
        form.reset();
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form onSubmit={handleFormData} method="post">
                <label htmlFor="email">Email :</label>
                <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
                <br />

                <label htmlFor="passWord">Password :</label>
                <input id="passWord" type="password" name="password"/>

                <button>Submit</button>
            </form>
        </section>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)