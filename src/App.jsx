import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import StickyNavbar from "./Navbar";

class App extends React.Component {
  // The state in our application
	state = {
    // The person object having properties fullName, bio, imgSrc and profession
		Person: {
			fullName: "Andrew Barcelona",
			bio: "Passionate individual with a love for coding and technology.",
			imgSrc: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
			profession: "Software Developer",
		},
		shows: false,
		timeInterval: 0,
	};
  // This variable holds the setInterval func that will be cleared when the component unmount
	setTimeInterval;

  // This component Lifecycle method runs whenever the app component is mounted 
	componentDidMount() {
		this.setTimeInterval = setInterval(() => {
			this.setState({
				timeInterval: this.state.timeInterval + 1,
			});
		}, 1000);
	}
  // Runs when the app component is about to unmount (i.e. leave the DOM)
	componentWillUnmount() {
		clearInterval(this.setTimeInterval);
	}
  // This is a Card function that shows our person details
	CustomCard({ fullName, bio, imgSrc, profession }) {
		return (
			<Card className="mt-6 w-96">
				<CardHeader color="blue-gray" className="relative h-56">
					<img src={imgSrc} alt="card-image" />
				</CardHeader>
				<CardBody>
					<Typography variant="h5" color="blue-gray" className="mb-2">
						{fullName}
					</Typography>
					<Typography>{bio}</Typography>

					<Typography className="font-bold">{profession}</Typography>
				</CardBody>
				<CardFooter className="pt-0">
					<Button>Read Full Profile</Button>
				</CardFooter>
			</Card>
		);
	}

  // What is rendered when the app component mounted.
	render() {
		return (
			<div>
				<StickyNavbar />
				<div className="flex items-center justify-center gap-5 flex-col">
					{this.state.shows &&
						this.CustomCard({ ...this.state.Person })}
					<Button
						onClick={() =>
							this.setState({ shows: !this.state.shows })
						}
					>
						{this.state.shows ? "Hide Profile" : "Show Profile"}
					</Button>
					<Typography>
						This component was mounted{" "}
						<Typography className="inline" variant="h4">
							{this.state.timeInterval}
						</Typography>{" "}
						ago
					</Typography>
				</div>
			</div>
		);
	}
}

export default App;
