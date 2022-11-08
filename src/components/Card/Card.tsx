import { useRef } from "react";
import Share from "../../assets/img/Share.svg";
import Option from "../../assets/img/Option.svg";
import Redirect from "../../assets/img/Redirect.svg";
import CardStyled from "./Styled";
import type { CardProps } from "../../types";

function Card(props: CardProps) {
  const articleOptionRef = useRef<HTMLDivElement>(null);
  const articleOverlayRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    if (articleOptionRef.current && articleOverlayRef.current) {
      articleOptionRef.current.style.display = "block";
      articleOverlayRef.current.style.display = "block";
    }
  }

  function handleMouseLeave() {
    if (articleOptionRef.current && articleOverlayRef.current) {
      articleOptionRef.current.style.display = "none";
      articleOverlayRef.current.style.display = "none";
    }
  }

  return (
    <CardStyled>
      <div
        className="article__content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div
          className="article__option"
          ref={articleOptionRef}>
          <a
            href="#"
            className="article__save">
            Save
          </a>
          <div className="article__more">
            <button
              type="button"
              className="article__shortcut article__shortcut--link">
              <img
                src={Redirect}
                alt="article redirect"
                className="article__action article__action--off"
              />
              <a
                href={props.link}
                className="article__truncate"
                target="_blank">
                {props.link}
              </a>
            </button>
            <button
              type="button"
              className="article__shortcut">
              <img
                src={Share}
                alt="Share image"
                className="article__action"
              />
            </button>
            <button
              type="button"
              className="article__shortcut">
              <img
                src={Option}
                alt="Option action"
                className="article__action"
              />
            </button>
          </div>
        </div>
        <div
          className="article__backdrop"
          ref={articleOverlayRef}>
          {false}
        </div>
        <img
          src={props.image}
          alt={`Image sent from ${props.creator}`}
          className="article__image"
        />
      </div>
      <div className="article__info">
        <a
          href="#"
          className="article__title">
          <h3 className="article__title__element">{props.title}</h3>
        </a>
        <a
          href="#"
          className="article__creator">
          <div className="article__creator__img">{false}</div>
          <h2 className="article__creator__name">{props.creator}</h2>
        </a>
      </div>
    </CardStyled>
  );
}

export default Card;
