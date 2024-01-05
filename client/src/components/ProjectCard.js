import { FaGithubSquare} from "react-icons/fa";
export default function ProjectCard({title, img, description, href}) {


    return(
        <div className="col-ms-12 col-md-6 col-lg-4 mb-3" id="projects">
           <div class="card" >
    <div className="images">
  <img src={img} class="card-img-top" alt="..."/>
  </div>
  <div class="card-body">
    <h4 class="card-title">{title}</h4>
    <p class="card-text">{description}</p>
    <a href={href} class="btn btn-white m-auto"><FaGithubSquare  size={40}  color="blacknpm "/></a>
  </div>
</div> 

        </div>


    )
}