import React from "react"

import "./index.scss"

const IndexPage = () => {
  return (
    <div className="container">
      <header>
        <a href="/" title="Go to home page">
          <img src="logo.png" alt="Site logo" />
        </a>
        <nav aria-label="Primary">
          <ul>
            <li><a href="#">Primary nav</a></li>
            <li><a href="#">Primary nav</a></li>
            <li><a href="#">Primary nav</a></li>
            <li><a href="#">Primary nav</a></li>
          </ul>
        </nav>
        <form role="search" aria-label="site">
          <label>
            <span>Search</span>
            <input type="search" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </header>

      <nav aria-label="Secondary">
        <ul>
          <li><a href="#">Secondary nav</a></li>
          <li><a href="#">Secondary nav</a></li>
          <li><a href="#">Secondary nav</a></li>
          <li><a href="#">Secondary nav</a></li>
          <li><a href="#">Secondary nav</a></li>
        </ul>
      </nav>

      <main>
        <article>
          <h1>Main article heading</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae sunt igitur communia vobis cum antiquis, iis sic utamur quasi concessis; Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat. Unum est sine dolore esse, alterum cum voluptate. Laboro autem non sine causa; Theophrasti igitur, inquit, tibi liber ille placet de beata vita? Nihil opus est exemplis hoc facere longius. Duo Reges constructio interrete. Graecum enim hunc versum nostis omnes Suavis laborum est praeteritorum memoria. Haec et tu ita posuisti, et verba vestra sunt.</p>

          <h2>Article secondary heading</h2>
          <p>Nos commodius agimus. A mene tu? Tantum dico, magis fuisse vestrum agere Epicuri diem natalem, quam illius testamento cavere ut ageretur. Tenesne igitur, inquam, Hieronymus Rhodius quid dicat esse summum bonum, quo putet omnia referri oportere? Nihilo beatiorem esse Metellum quam Regulum. Sed quanta sit alias, nunc tantum possitne esse tanta. Philosophi autem in suis lectulis plerumque moriuntur. Esse enim, nisi eris, non potes.</p>
          <p>Sunt enim quasi prima elementa naturae, quibus ubertas orationis adhiberi vix potest, nec equidem eam cogito consectari. Id Sextilius factum negabat. Quorum sine causa fieri nihil putandum est. Quae autem natura suae primae institutionis oblita est?</p>
        </article>
      </main>

      <aside aria-label="Sidebar">
        <section>
          <h2>Share</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </section>
        <section>
          <h2>Recommended</h2>
          <ul>
            <li>
              <article>
                <h3><a href="#">Related article</a></h3>
                <p>Article description</p>
              </article>
            </li>
            <li>
              <article>
                <h3><a href="#">Related article</a></h3>
                <p>Article description</p>
              </article>
            </li>
          </ul>
        </section>
      </aside>

      <footer>
        <ul>
          <li><a href="#">Footer link</a></li>
          <li><a href="#">Footer link</a></li>
          <li><a href="#">Footer link</a></li>
          <li><a href="#">Footer link</a></li>
          <li><a href="#">Footer link</a></li>
        </ul>
      </footer>
    </div>
  )
}
export default IndexPage

/**
 * 3. Write all mark up (No styling / logic) in index page
 * 4. Break down Markup
 * 5. Add styling
 * 6. Add logic
 */
