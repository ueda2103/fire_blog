import React from "react"

import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery } from "gatsby"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      investment_image: file(relativePath: {eq: "aboutInvestment.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resale_image: file(relativePath: {eq: "aboutResale.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      programming_image: file(relativePath: {eq: "aboutProgramming.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ryo_image: file(relativePath: {eq: "ryo.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yuki_image: file(relativePath: {eq: "yuki.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="about" />
      <div id="about">
        <div className="fire-blog">
          <h2>社畜2人が10年でFIREを目指すブログ</h2>
          <p>
            執筆は2018年某企業で社会人キャリアをスタートした社畜の二人
          </p>
          <p>
            お互いの強みを活かし、補いながら10年でFIRE（早期リタイア）を目指して試行錯誤していく記録です。
          </p>
          <p>
            このブログが同じ目標を持つ方やFIREに興味を持つ方の一助になれれば幸いです。
          </p>
        </div>

        <h2>Theme</h2>
        <h3>▶︎　経済・投資</h3>
        <div className="about-card-style">
          <Image
            className="about-page-image"
            fluid={data.investment_image.childImageSharp.fluid}
            alt={data.name}
          />{" "}
          <div className="theme-text">
            <p>
              株式・不動産投資という王道の投資方法が中心になります。
            </p>
            <p>
              FIREを目指す中で不労所得は最重要と考えています。
            </p>
            <p>
              このブログでは売買方法や運用実績、市場について発信していきます。
            </p>
          </div>
        </div>

        <h3>▶︎　せどり</h3>
        <div className="about-card-style">
          <Image
            className="about-page-image"
            fluid={data.resale_image.childImageSharp.fluid}
            alt={data.name}
          />{" "}
          <div className="theme-text">
            <p>
              せどりとは商品を安く仕入れて定価かそれ以下で販売を行うことです。
            </p>
            <p>
              消耗品や生活必需品を中心にせどりを行っています。
            </p>
            <p>
              このブログではノウハウや収益、税金関係、マインドについての記録を発信していきます。
            </p>
          </div>
        </div>

        <h3>▶︎　プログラミング</h3>
        <div className="about-card-style">
          <Image
            className="about-page-image"
            fluid={data.programming_image.childImageSharp.fluid}
            alt={data.name}
          />{" "}
          <div className="theme-text">
            <p>
              プログラミングはWeb製作、Web開発の基礎知識になります。
            </p>
            <p>
              近年本業、副業を問わず人気を集めています。
            </p>
            <p>
              このブログではWeb開発分野の技術的な部分の学習方法やエラー解決の過程を中心に発信していきます。
            </p>
          </div>
        </div>

        <h2>Profile</h2>
        <div className="ryo">
          <div className="profile-show">
            <Image
              className="profile-image"
              fluid={data.ryo_image.childImageSharp.fluid}
              alt={data.name}
            />{" "}
            <table>
              <tbody>
                <tr>
                  <td><strong>Name</strong></td>
                  <td>りょう</td>
                </tr>
                <tr>
                  <td><strong>Charge</strong></td>
                  <td>経済・投資、せどり</td>
                </tr>
                <tr>
                  <td><strong>Performance</strong></td>
                  <td>せどり１年目：年商1000万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            みなさん初めまして！
          </p>
          <p>
            人生ノー勉！偏差値45、上司曰くSEをやってます りょう と申します！
          </p>
          <p>
            スポーツ漬けの学生生活をしていた私が環境や考え方の変化により副業や投資、転職などさまざまな物を用いてFIREを目指していく過程をブログとして記入いたします。
          </p>
          <p>
            月収１２万円の給料明細。奨学金返済３万円。
          </p>
          <p>
            社会人を舐めていた私の思考の変化、勉強を始めたタイミング、せどりを始めたきっかけなど心境の変化や月間の収支、節約や物販のことなどを書いていこうと思います。
          </p>
          <p>
            このブログをご覧いただいている歳上の人や同年代、希望を抱いている勇気ある学生の方に影響を与えていけたらなと思います。
          </p>
          <p>
            私自身至らないところがあると思いますが、コメントや質問など頂ければと思います。
          </p>
          <p>
            よろしくお願いいたします！
          </p>
        </div>

        <div className="yuki">
          <div className="profile-show">
            <Image
              className="profile-image"
              fluid={data.yuki_image.childImageSharp.fluid}
              alt={data.name}
            />{" "}
            <table>
              <tbody>
                <tr>
                  <td><strong>Name</strong></td>
                  <td>ゆーき</td>
                </tr>
                <tr>
                  <td><strong>Charge</strong></td>
                  <td>プログラミング、ブログ</td>
                </tr>
                <tr>
                  <td><strong>Portfolio</strong></td>
                  <td>社畜2人が10年でFIREを目指すブログ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            みなさんこんにちは！
          </p>
          <p>
            偏差値70（前職基準曰くなので嘘だと思ってます笑）
            プログラミング学習中のゆーきです！
          </p>
          <p>
            このブログでは主にプログラミングの記事を書かせていただいています！
          </p>
          <p>
            社畜からの脱却を図りプログラミングを中心にキャリアや人生の再設計をしてFIREを目指す過程を記録していきます！
          </p>
          <p>
            退職のきっかけやWeb開発の成果物やエラー解決など新しいキャリアを築きたい方の一助になれればと思います！
          </p>
          <p>
            また技術的には至らない点が多いのでご指摘いただければと思います！
          </p>
          {/* <p>
            ホームページ、ECサイト製作、Webアプリ開発のお仕事も承ります。
          </p>
          <p>
            ポートフォリオやスキルセットをご覧いただいてお問い合わせフォームからご連絡いただければと思います。
          </p> */}
          <p>
            自分も駆け出しエンジニアのためわからない部分も多いですが、コメントやご質問いただけると嬉しいです！
          </p>
          <p>
            よろしくお願いいたします！
          </p>

          {/* <h4>スキルセット</h4>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Ruby/Ruby on Rails</li>
            <li>AWS</li>
          </ul> */}
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage
