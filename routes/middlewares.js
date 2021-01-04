exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash('msg', '로그인이 필요하다')
    res.redirect('/');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    req.flash('msg', '현재 로그인 중입니다.')
    res.redirect('/');
  }
};
