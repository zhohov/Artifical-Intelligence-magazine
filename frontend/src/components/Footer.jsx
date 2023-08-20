import React from "react";

const Footer = () => {
    return (
        <div class='mt-5 pt-5'>
            <div class="bg-secondary-subtle p-5 mt-5 footer">
                <div class="row container px-md-5">
                    <div class="col">
                    <h5>Created by</h5>
                    <p class="pt-3">Created, designed and programmed by Maksim Zhohov in 2023 for the pet project Artificial Intelligence magazine - a magazine about artificial intelligence, neural networks and technologies that are part of our new reality.</p>
                    </div>
                    <div class="col">
                    <h5>Cooperated</h5>
                    <p class="pt-3">zhohovmaksim@gmail.com</p>
                    </div>
                </div>
            </div>

            <div class="bg-black p-5 pt-1 pb-1 text-center text-white-50">
                <p class="pt-3">©2023 Artificial Intelligence magazine</p>
            </div>
        </div>
    )
}

export default Footer;