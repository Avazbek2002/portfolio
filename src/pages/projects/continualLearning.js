import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/animatedText";
import Layout from "@/components/Layout";
import ViT from "../../../public/images/projects/ViT.png";
import Image from "next/image";
import ADA from "../../../public/images/projects/ADA.png";
import Link from "next/link";

const ContinualLearning = () => {
    return (
        <>
            <Head>
                <title>Avazbek Isroilov | Continual Learning</title>
                <meta name="This page describes the research project i have worked on"/>
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Continual Learning in Vision Transformers" className=' text-4xl! mb-16'/>
                    <h3 className="text-4xl font-bold mb-4">Continual Learning</h3>
                    <p className="font-medium my-4">
                        Continual learning focuses on creating machine learning models that can learn new knowledge and skills while retaining their accuracy on previously acquired abilities. 
                        This capability enables AI models to build on existing knowledge rather than relearning everything from scratch. 
                        Consequently, it saves significant time and computational resources, especially for large-scale AI models like LLMs and generative AI.
                    </p>
                    <div className="font-medium">
                        Key aspects of continual learning:
                        <ol className="list-decimal pl-6 mt-2">
                            <li className="mb-2">
                                Sequential learning: The model learns from a stream of data over time, rather than from a fixed dataset.
                            </li>
                            <li className="mb-2">
                                Avoiding catastrophic forgetting: The challenge of retaining previously learned knowledge while acquiring new skills.
                            </li>
                            <li className="mb-2">
                                Transfer Learning: Using the knowledge from previous tasks to learn new tasks.
                            </li>
                            <li className="mb-2">
                                Adaptability: Ability to adjust to changing environments or task requirements.
                            </li>
                        </ol>
                    </div>

                    <p className="font-medium mt-4">
                        There are 4 main types of continual learning methods. In the following paragraphs, they are briefly explained: 
                    </p>
                    <div className="font-medium">
                        <ol className="list-decimal pl-6 mt-2">
                            <li className="mb-2">
                                Regularization Methods: limit weight updates of the model to preserve important parameters to previous tasks.
                            </li>
                            <li className="mb-2">
                                Rehearsal Methods: store or generate examples from previous tasks to maintain performance.
                            </li>
                            <li className="mb-2">
                                Architectural Methods: dynamically grow the network architecture as the model learn new tasks.
                            </li>
                            <li className="mb-2">
                                Meta-learning: learn how to learn efficiently, enabling quick adaptation to new tasks.
                            </li>
                        </ol>
                    </div>
                    <p className="font-medium">
                        In this research project, I focused on applying <strong className="font-bold">architectural methods</strong> of continual learning to special type of Neural Network model - <strong className="font-bold">Vision Transformers.</strong>
                    </p>
                    <Link href="https://arxiv.org/abs/2010.11929"><h3 className="text-4xl font-bold my-4 hover:underline">Vision Transformers</h3></Link>
                    <p className="font-medium">
                        Vision transformers (ViT) are a type of neural network models designed for vision tasks, inspired by the success
                        of transformers in natural language processing. ViT adjusts the transformer architecture, originally designed for
                        text, to process images. That is done by treating the image as a sequence of patches, similar to how transformers
                        process a sequence of words.
                    </p>
                    <div className="grid grid-cols-2 gap-4 items-center my-4">
                        <div className="col-span-1">
                            <Image 
                                src={ViT} 
                                className="w-full border-2 border-dark rounded-2xl shadow-xl"
                                alt="Vision Transformer Image"
                            />
                        </div>
                        <div className="col-span-1">
                        <p className="font-light"><strong className="font-bold">Image to the left.</strong> The process is as follows:</p>
                        <div className="font-light">
                            <ol className="list-decimal pl-6 mt-2">
                                <li className="mb-2">
                                    Image Patching: Divides the input image into fixed-size patches.
                                </li>
                                <li className="mb-2">
                                    Patch Embedding: Flattens and linearly projects the patches into lower-dimensional space.
                                </li>
                                <li className="mb-2">
                                    Position Embedding: Adds learnable position embeddings to retain spatial information.
                                </li>
                                <li className="mb-2">
                                    Transformer Encoded: Processes the sequence of patch embeddings using self-attention mechanisms.
                                </li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    <Link href="https://arxiv.org/abs/2206.14085"><h3 className="text-4xl font-bold mt-8 mb-4 hover:underline">Adaptive Distillation of Adapters</h3></Link>
                    <div className="grid grid-cols-2 gap-4 items-center my-4">
                        <div className="col-span-1">
                            <Image 
                                src={ADA} 
                                className="w-full border-2 border-dark rounded-2xl shadow-xl"
                                alt="Vision Transformer Image"
                            />
                        </div>
                        <div className="col-span-1">
                        <p className="font-light"><strong className="font-bold">Image to the left.</strong> The process is as follows:</p>
                        <div className="font-light">
                            <ol className="list-decimal pl-6 mt-2">
                                <li className="mb-2">
                                    The approach uses a limited pool of new parameters called adapters.
                                </li>
                                <li className="mb-2">
                                    It adds new adapters to the ViT architecture as the model learns new tasks.
                                </li>
                                <li className="mb-2">
                                    There is a limit to the number of adapters.
                                </li>
                                <li className="mb-2">
                                    Once the limit is reached, for new tasks:
                                    <ul>
                                        <li>
                                            It measures the transferability score with previously learned tasks.
                                        </li>
                                        <li>
                                            It distills with the adapter that has the highest transferability score.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    <p className="font-medium">
                        This research project focuses on implementing the above apprach (ADA) which is still in progress.
                    </p>
                </Layout>
            </main>
        </>
    );
}

export default ContinualLearning;