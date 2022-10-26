let articleUrl = "./article.json";
let imgUrl="./anime/img.json"
let rand;
class Main extends React.Component {
	render() {
        // console.log(this.props.site.site,"pppp")
		return (
			<div className="main">
				{this.props.site.site.map((site) => {
					return (
						<article key={site.id}>
							<a href={site.path}>{site.title}</a>
						</article>
					);
				})}
			</div>
		);
	}
}
class Right extends React.Component {
	render() {
        console.log(this.props.img.img)
		return (
			<div className="right">
				<img id="rightAnime" src={this.props.img.img}></img>
				<br></br>
				<a id="arr" href={this.props.img.url} target="_blank">
					{this.props.img.des}
				</a>
			</div>
		);
	}
}
fetch(articleUrl).then(response=>{
    response.json().then(res=>
        {
            fetch(imgUrl).then(img=>{
                img.json().then(img=>{
                    // console.log(res,img)
					rand=Math.floor(Math.random()*(img.img.length))
                    ReactDOM.render(
                        <div className="max">
                            <Main site={res}/>
                            <Right img={img.img[rand]}/>
                        </div>,
                        document.getElementsByClassName("contente")[0]
                    );
                })
            })
        }
    )
})

