import React, { Component } from "react";
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom"

class Consult extends Component {
    state = {};

    handleChange = ({ name, value }) => this.setState({ [name]: value });

    render() {
        const { name, email, number, option, survey } = this.state;
        return (
            <div id='consult-page' >
            <p id='home-title'>
                <Divider />
                    C O N S U L T
                <Divider />
            </p>
            <form>
            <div id='consult-form' className="columns-1 justify-items-start p-2 bg-greige rounded">
                <div>
                    <label>
                        Name:
                        <p>
                        <input type="text" name="name" />
                        </p>
                    </label>
                </div>
            <div>
            <label>
                Email:
                <p>
                <input type="text" name="email" />
                </p>
            </label>
            </div>
            <div>
            <label>
                Phone Number:
                <p>
                <input type="text" name="number" />
                </p>
            </label>
            </div>
            <div>
            <label>
                How did you hear about us?
                <p>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="google">Google</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">Tik Tok</option>
                <option value="referral">Client Referral</option>
                <option value="drive">Drive By</option>
                <option value="other">Other</option>
                </select>
                </p>
            </label>
            </div>
            <div>
            <label>
                Which best desribes your hairs density?
                <p>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="thin">Thin</option>
                <option value="thinM">Thin/Medium</option>
                <option value="medium">Medium</option>
                <option value="mediumT">Medium/Thick</option>
                <option value="thick">Thick</option>
                </select>
                </p>
            </label>
            </div>
            <div>
            <label>
                Which best desribes your wave pattern?
                <p>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="straight">Straight</option>
                <option value="wavyS">Straight/Wavy</option>
                <option value="wavy">Wavy</option>
                <option value="wavyX">Wavy/Curly</option>
                <option value="curly">Curly</option>
                </select>
                </p>
            </label>
            </div>
            <div>
            <label>
                Which best desribes your hair length?
                <p>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="pixie">Pixie</option>
                <option value="chin">Chin Length</option>
                <option value="shoulder">Shoulder Length</option>
                <option value="collarbone">Collarbone Length</option>
                <option value="back">Mid-Back</option>
                <option value="long">Super Long</option>
                </select>
                </p>
            </label>
            </div>
            <div>
            <label>
                Anything else we should know about your hair?
                <input rows='3' type="text" name="survery" />
            </label>
            <div>
            <Link to={"/submitted"}>
                    <button id='nav-button' className="btn bg-gray-100 opacity-50 rounded-[12px]">Submit</button>
            </Link>
            </div>
            </div>
            </div>
            </form>
            </div>
        );
    }
}

export default Consult;
