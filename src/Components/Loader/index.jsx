import React from 'react'
import './loader.css';

export default function Loader() {
    return (
        <div className="loader">
            <div class="preloader loading">
                <span class="slice"></span>
                <span class="slice"></span>
                <span class="slice"></span>
                <span class="slice"></span>
                <span class="slice"></span>
                <span class="slice"></span>
            </div>
        </div>
    )
}