import React, {Component} from 'react';

class SignIn extends Component {
    render() {
        return(
            <div id="wp-subscribe" className="Subcribe">
                <h4 className="title">ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h4>
                <p className="text">Công nghệ đang thay đổi nhanh chóng, hãy cũng vươn ra thế giới với những bài viết chất lượng từ Fullstack Station bạn nhé.</p>
                <form className="wp-subscribe-form" method="post" id="wp-subscribe-form">
                	<input class="regular-text name-field" type="text" name="name" placeholder="Tên của bạn" title="Tên của bạn" required=""/>
                	<input class="regular-text email-field" type="email" name="email" placeholder="Email của bạn" title="Email của bạn" required=""/>
                	<div class="wps-consent-wrapper"> 
                		<label for="consent-field"> 
                			<input class="consent-field" id="consent-field" type="checkbox" name="consent" required=""/> Đồng ý nhận tin </label>
                	</div>
                	<input class="submit" type="submit" name="submit" value="Đăng ký"/>
                </form>
                <p class="footer-text">Bạn sẽ nhận được email thông báo khi có bài viết mới, mình không spam vì mình cũng rất ghét :)</p>
            </div>
        )
    }
}

export default SignIn;