import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --primary-color: #222260;
        --primary-color2: rgba(34, 34, 96, 0.6);
        --primary-color3: rgba(34, 34, 96, 0.4);
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body {
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: var(--primary-color);
        background: #f5f6fa;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color);
    }

    .error {
        color: var(--color-delete);
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0% {
                transform: translateX(0);
            }
            25% {
                transform: translateX(10px);
            }
            50% {
                transform: translateX(-10px);
            }
            75% {
                transform: translateX(10px);
            }
            100% {
                transform: translateX(0);
            }
        }
    }

    a {
        color: var(--primary-color);
        text-decoration: none;
        transition: color 0.2s ease-in-out;

        &:hover {
            color: var(--color-accent);
        }
    }

    button {
        cursor: pointer;
        background-color: var(--primary-color);
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: var(--color-accent);
        }

        &:disabled {
            cursor: not-allowed;
            background-color: var(--color-grey);
            color: #fff;
        }
    }

    input,
    textarea {
        font-family: 'Nunito', sans-serif;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        margin-bottom: 1rem;
        width: 100%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

        &:focus {
            outline: none;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        }

        &::placeholder {
            color: var(--primary-color3);
        }
    }
`;
