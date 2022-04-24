import React from 'react'

const TeamsForm = () => {
  return (
    <div>
        <div class="popup">
            <div class="close-btn">&times;</div>
            <div class="form">
            <div class= "form-element">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Enter email" />
                </div>
            <div class="form-element">
                <label for ="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" />
            </div>
        <div class="form-element">
            <button>Sign in</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default TeamsForm