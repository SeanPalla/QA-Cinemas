import ClassificationsComp from "../components/Classifications/ClassificationsComp";

export default function Classifications() {
    return (
        <div>
            <h1 className="classifications-heading">BBFC Classifications</h1>
            <h2 className="classifications-subHeading">
                Universal(U) - Suitable for all
            </h2>
            <ClassificationsComp
                classificationsImage="static/images/GB_BBFC_U_RGB.png"
                classificationsAlttext="Universal Icon"
                classificationsDesc="A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child"
            />
            <h2 className="classifications-subHeading">
                Parental Guidance(PG)
            </h2>
            <ClassificationsComp
                classificationsImage="static/images/GB_BBFC_PG_RGB.png"
                classificationsAlttext="PG Icon"
                classificationsDesc="General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children."
            />
            <h2 className="classifications-subHeading">
                12A/12 - Suitable for 12 years and over
            </h2>
            <ClassificationsComp
                classificationsImage="static/images/GB_BBFC_12A_RGB.png"
                classificationsAlttext="12A Icon"
                classificationsDesc="Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work."
            />
            <h2 className="classifications-subHeading">
                15 - Suitable only for 15 years and over
            </h2>
            <ClassificationsComp
                classificationsImage="static/images/GB_BBFC_15_RGB.png"
                classificationsAlttext="15 Icon"
                classificationsDesc="No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work."
            />
            <h2 className="classifications-subHeading">
                18 - Suitable only for adults
            </h2>
            <ClassificationsComp
                classificationsImage="static/images/GB_BBFC_18_RGB.png"
                classificationsAlttext="18 Icon"
                classificationsDesc="No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment."
            />
            <h2 className="classifications-subHeading">
                More information about classifications
            </h2>
            <ClassificationsComp
                classificationsImage="static/images/information_image.png"
                classificationsAlttext="info Icon"
                classificationsDesc="For more information on BBFC classifications you can find all the info at"
                classificationsLink="BBFC.co.uk"
            />
        </div>
    );
}
