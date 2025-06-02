// @TODO use this adminService file once Snyk Code for VSCode
// is able to navigate to cross-file paths in the vuln description 
/** 
module.exports.adminLoginSuccess = function(redirectPage, res) {
    console.log({redirectPage})
    if (redirectPage) {
        return res.redirect(redirectPage)
    } else {
        return res.redirect('/admin')
    }
}
*/

function adminLoginSuccess1(redirectPage, session, username, res) {
  session.loggedIn = 1

  // Log the login action for audit
  console.log(`User logged in: ${username}`)

  if (redirectPage) {
      return res.redirect(redirectPage)
  } else {
      return res.redirect('/admin')
  }
}

exports.loginHandlerTest = function (req, res, next) {
  if (validator.isEmail(req.body.username)) {
    User.find({ username: req.body.username, password: req.body.password }, function (err, users) {
      if (users.length > 0) {
        const redirectPage = req.body.redirectPage
        const session = req.session
        const username = req.body.username
        return adminLoginSuccess1(redirectPage, session, username, res)
      } else {
        return res.status(401).send()
      }
    });
  } else {
    return res.status(401).send()
  }
};
