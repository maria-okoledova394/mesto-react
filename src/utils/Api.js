const onResult = (res) =>{
  if(res.ok){
    console.log("ok");
    return res.json();    
  }
  return Promise.reject('Упс... Ошибочка :(')
}
  
class Api{
    constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
    }
  
    getInitialCards() {
      return fetch(`${this._url}cards`, {
          method: "GET",
          headers: this._headers
        }).then(onResult)
    }

    addCard(data){
      return fetch(`${this._url}cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data)
      })
      .then(onResult)
    }

    removeCard(_id) {
      return fetch(`${this._url}cards/${_id}`, {
        method: "DELETE",
        headers: this._headers,
      })
      .then(onResult)
    }

    getProfileInfo() {
      return fetch(`${this._url}users/me`, {
          method: "GET",
          headers: this._headers
        }).then(onResult)
    }

    changeProfileInfo(data) {
      return fetch(`${this._url}users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify(data)
        }).then(onResult)
    }

    updateAvatar(data) {
      return fetch(`${this._url}users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify(data)
        }).then(onResult)
    }

    likeCard(_id) {
      return fetch(`${this._url}cards/likes/${_id}`, {
        method: "PUT",
        headers: this._headers,
      })
      .then(onResult)
    }

    removeLike(_id) {
      return fetch(`${this._url}cards/likes/${_id}`, {
        method: "DELETE",
        headers: this._headers,
      })
      .then(onResult)
    }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
    "content-type": "application/json",
    "Authorization": "d9c7d5d0-8d7b-4c75-89cd-3f307d29d79f"
  }
})

export { api };