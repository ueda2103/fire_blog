import React from "react"

import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery } from "gatsby"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
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
    }
  `)

  return (
    <Layout>
      <SEO title="About FIRE BLOG" />
      <div id="about">
        <h2>About FIRE BLOG</h2>
        <p>
          2018年某企業で社会人キャリアをスタートした社畜二人がお互いの強みを生かし、補いながら10年でFIRE（早期リタイア）を目指して試行錯誤していく記録です。
          このブログが同じ目標を持つ方やFIREに興味を持つ方の一助になれれば幸いです。
        </p>

        <h2>Theme</h2>
        <h3>せどり</h3>
        <Image
          className="about-page-image"
          fluid={data.resale_image.childImageSharp.fluid}
          alt={data.name}
        />{" "}
        <p>
          せどりとは商品を安く仕入れて定価かそれ以下で販売を行うことです。
          消耗品や生活必需品を中心にせどりを行っています。
          実際のノウハウや収益、税金関係、マインドについての記録を発信していきます。
        </p>

        <h3>プログラミング</h3>
        <Image
          className="about-page-image"
          fluid={data.programming_image.childImageSharp.fluid}
          alt={data.name}
        />{" "}
        <p>
          プログラミングはWeb製作、Web開発の基礎知識になります。
          近年本業、副業を問わず人気を集めています。

          このブログではWeb開発分野の技術的な部分の学習方法やエラーの過程を中心に発信していきます。
        </p>

        <h2>Profile</h2>
        <p>
          みなさん初めまして！

          人生ノー勉！偏差値45、上司曰くSEをやってます りょう と申します！
          スポーツ漬けの学生生活をしていた私が環境や考え方の変化により副業や投資、転職などさまざまな物を用いてFIREを目指していく過程をブログとして記入いたします。

          月収１２万円の給料明細。奨学金返済３万円。
          社会人を舐めていた私の思考の変化、勉強を始めたタイミング、せどりを始めたきっかけなど心境の変化や月間の収支、節約や物販のことなどを書いていこうと思います。

          このブログをご覧いただいている歳上の人や同年代、希望を抱いている勇気ある学生の方に影響を与えていけたらなと思います。

          私自身至らないところがあると思いますが、コメントや質問など頂ければと思います。
          よろしくお願いいたします！
        </p>

        <p>
          みなさんこんにちは！

          偏差値70（前職基準曰くなので嘘だと思ってます笑）
          プログラミング学習中のゆうです！
          このブログでは主にプログラミングの記事を書かせていただいています！

          社畜からの脱却を図りプログラミングを中心にキャリアや人生の再設計をしてFIREを目指す過程を記録していきます！
          退職のきっかけやWeb開発の成果物やエラー解決など新しいキャリアを築きたい方の一助になれればと思います！
          また技術的には至らない点が多いのでご指摘いただければと思います！

          ホームページ、ECサイト製作、Webアプリ開発のお仕事も承ります。
          ポートフォリオやスキルセットをご覧いただいてお問い合わせフォームからご連絡いただければと思います。

          自分も駆け出しエンジニアのためわからない部分も多いですが、コメントやご質問いただけると嬉しいです！
          よろしくお願いいたします！

          スキルセット
          ・HTML/CSS
          ・JavaScript
          ・Ruby/Ruby on Rails
          ・AWS
        </p>
      </div>
    </Layout>
  )
}
export default AboutPage
