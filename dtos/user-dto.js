class UserDTO {
    constructor(model) {
        this.email = model.email
        this.login = model.login
        this.id = model._id
        this.is_activated = model.is_activated
    }
}

export default UserDTO