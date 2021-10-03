import React, { useEffect, ReactDOM } from 'react'

import Handlebars from 'handlebars';

const source = `{{!-- section --}}
<section class="section my-4">
    <div class="container text-center">
        <div class="title py-5">
            <h1>Node File Uploader</h1>
            <p class="subtitle">Upload Images to the <strong>Server</strong></p>
        </div>

        <div class="row justify-content-center">
            <div class="col-4">
                <form action="/uploadmultiple" enctype="multipart/form-data" method="POST">
                    <div class="row">
                        <div class="col-8">
                            <input type="file" class="form-control" name="images" id="formFile" multiple>
                        </div>
                        <div class="col-2">
                            <input type="submit" class="btn btn-warning" value="Upload Images">
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {{!-- display images --}}
            <section class="mt-5">
                <div class="row">
                        {{#each images}} 
                            {{#each this}}
                                {{#if imageBase64 }}
                                    {{!-- bootstrap cads --}}
                                        <div class="col-3">
                                                <div class="card shadow" style="width: 18rem;">
                                                    <img src='data:{{contentType}};base64,{{imageBase64}}' class="card-img-top" class="img-fluid" alt="...">
                                                    <div class="card-body">
                                                        <h5 class="card-title font-poppins">{{file.originalname}}</h5>
                                                        <p class="text-secondary font-size-09">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a href="#" class="btn btn-info font-size-09 text-light">Read More...</a>
                                                    </div>
                                                </div>
                                        </div>
                                    {{!-- /bootstrap cads --}}
                                {{/if}}
                             {{/each}}
                        {{/each}}
                </div>
            </section>
        {{!-- /display images --}}

    </div>
</section>
{{!-- /section --}}`;

const template  =  Handlebars.compile( source );

	
const Images = () => {
    return (
        <>
        <div className="container" dangerouslySetInnerHTML={{ __html: template( ) }} />
        </>
    )
}