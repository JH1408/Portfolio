import { SubHeading } from "./common";

const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-lg font-medium mt-[35px] mb-[10px] mx-auto">
      {children}
    </h3>
  );
};

const H4 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="text-base font-medium mt-[15px] mb-[10px] mx-auto">
      {children}
    </h4>
  );
};

const H5 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5 className="text-sm italic font-medium my-[15px] mx-auto">{children}</h5>
  );
};

const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`text-base font-light ${className ? className : ""}`}>
      {children}
    </p>
  );
};

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="font-light text-base list-disc cursor-default">
      {children}
    </li>
  );
};

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul className="pl-[40px]">{children}</ul>;
};

const Span = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-medium">{children}</span>;
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="text-darkblue pt-[60px] px-[40px] pb-[30px] text-left">
      <SubHeading text="Privacy Policy" privacy />
      <H3>Owner and Data Controller</H3>
      <Paragraph>
        Josephine Hartig <br />
        Julianalaan 16 <br />
        3708 BD Zeist <br />
        Netherlands <br />
        <em>Owner contact email:</em> info@josyhartig.com
      </Paragraph>
      <H3>Types of Data Collected</H3>
      <Paragraph>
        Among the types of Personal Data that this Application collects, by
        itself or through third parties, there are: email address, Usage Data.
      </Paragraph>
      <Paragraph>
        Complete details on each type of Personal Data collected are provided in
        the dedicated sections of this privacy policy or by specific explanation
        texts displayed prior to the Data collection.
      </Paragraph>
      <Paragraph>
        Personal Data may be freely provided by the User, or, in case of Usage
        Data, collected automatically when using this Application.
      </Paragraph>
      <Paragraph>
        Unless specified otherwise, all Data requested by this Application is
        mandatory and failure to provide this Data may make it impossible for
        this Application to provide its services. In cases where this
        Application specifically states that some Data is not mandatory, Users
        are free not to communicate this Data without consequences to the
        availability or the functioning of the Service.
      </Paragraph>
      <Paragraph>
        Users who are uncertain about which Personal Data is mandatory are
        welcome to contact the Owner. Any use of Cookies – or of other tracking
        tools – by this Application or by the owners of third-party services
        used by this Application serves the purpose of providing the Service
        required by the User, in addition to any other purposes described in the
        present document and in the Cookie Policy, if available.
      </Paragraph>
      <Paragraph>
        Users are responsible for any third-party Personal Data obtained,
        published or shared through this Application and confirm that they have
        the third party's consent to provide the Data to the Owner.
      </Paragraph>
      <H3>Mode and place of processing the Data</H3>
      <H4>Methods of processing</H4>
      <Paragraph>
        The Owner takes appropriate security measures to prevent unauthorized
        access, disclosure, modification, or unauthorized destruction of the
        Data.
      </Paragraph>
      <Paragraph>
        The Data processing is carried out using computers and/or IT enabled
        tools, following organizational procedures and modes strictly related to
        the purposes indicated. In addition to the Owner, in some cases, the
        Data may be accessible to certain types of persons in charge, involved
        with the operation of this Application (administration, sales,
        marketing, legal, system administration) or external parties (such as
        third-party technical service providers, mail carriers, hosting
        providers, IT companies, communications agencies) appointed, if
        necessary, as Data Processors by the Owner. The updated list of these
        parties may be requested from the Owner at any time.
      </Paragraph>
      <H4>Legal basis of processing</H4>
      <Paragraph>
        The Owner may process Personal Data relating to Users if one of the
        following applies:
      </Paragraph>
      <List>
        <ListItem>
          Users have given their consent for one or more specific purposes.
          Note: Under some legislations the Owner may be allowed to process
          Personal Data until the User objects to such processing ("opt-out"),
          without having to rely on consent or any other of the following legal
          bases. This, however, does not apply, whenever the processing of
          Personal Data is subject to European data protection law;
        </ListItem>
        <ListItem>
          provision of Data is necessary for the performance of an agreement
          with the User and/or for any pre-contractual obligations thereof;
        </ListItem>
        <ListItem>
          processing is necessary for compliance with a legal obligation to
          which the Owner is subject;
        </ListItem>
        <ListItem>
          processing is related to a task that is carried out in the public
          interest or in the exercise of official authority vested in the Owner;
        </ListItem>
        <ListItem>
          processing is necessary for the purposes of the legitimate interests
          pursued by the Owner or by a third party.
        </ListItem>
      </List>
      <Paragraph>
        In any case, the Owner will gladly help to clarify the specific legal
        basis that applies to the processing, and in particular whether the
        provision of Personal Data is a statutory or contractual requirement, or
        a requirement necessary to enter into a contract.
      </Paragraph>
      <H4>Place</H4>
      <Paragraph>
        The Data is processed at the Owner's operating offices and in any other
        places where the parties involved in the processing are located.
      </Paragraph>

      <Paragraph>
        Depending on the User's location, data transfers may involve
        transferring the User's Data to a country other than their own. To find
        out more about the place of processing of such transferred Data, Users
        can check the section containing details about the processing of
        Personal Data.
      </Paragraph>
      <Paragraph>
        Users are also entitled to learn about the legal basis of Data transfers
        to a country outside the European Union or to any international
        organization governed by public international law or set up by two or
        more countries, such as the UN, and about the security measures taken by
        the Owner to safeguard their Data.
      </Paragraph>

      <Paragraph>
        If any such transfer takes place, Users can find out more by checking
        the relevant sections of this document or inquire with the Owner using
        the information provided in the contact section.
      </Paragraph>
      <H4>Retention time</H4>
      <Paragraph>
        Personal Data shall be processed and stored for as long as required by
        the purpose they have been collected for.
      </Paragraph>
      <Paragraph>Therefore:</Paragraph>
      <List>
        <ListItem>
          Personal Data collected for purposes related to the performance of a
          contract between the Owner and the User shall be retained until such
          contract has been fully performed.
        </ListItem>
        <ListItem>
          Personal Data collected for the purposes of the Owner's legitimate
          interests shall be retained as long as needed to fulfill such
          purposes. Users may find specific information regarding the legitimate
          interests pursued by the Owner within the relevant sections of this
          document or by contacting the Owner.
        </ListItem>
      </List>
      <Paragraph>
        The Owner may be allowed to retain Personal Data for a longer period
        whenever the User has given consent to such processing, as long as such
        consent is not withdrawn. Furthermore, the Owner may be obliged to
        retain Personal Data for a longer period whenever required to do so for
        the performance of a legal obligation or upon order of an authority.
      </Paragraph>

      <Paragraph>
        Once the retention period expires, Personal Data shall be deleted.
        Therefore, the right to access, the right to erasure, the right to
        rectification and the right to data portability cannot be enforced after
        expiration of the retention period.
      </Paragraph>
      <H3>The purposes of processing</H3>
      <Paragraph>
        The Data concerning the User is collected to allow the Owner to provide
        its Services, as well as for the following purposes: Contacting the
        User, Displaying content from external platforms and Hosting and backend
        infrastructure.
      </Paragraph>
      <Paragraph>
        Users can find further detailed information about such purposes of
        processing and about the specific Personal Data used for each purpose in
        the respective sections of this document.
      </Paragraph>
      <H3>Detailed information on the processing of Personal Data</H3>
      <Paragraph>
        Personal Data is collected for the following purposes and using the
        following services:
      </Paragraph>
      <H4>Contacting the User</H4>
      <H5>Contact form (this Application)</H5>
      <Paragraph>
        By filling in the contact form with their Data, the User authorizes this
        Application to use these details to reply to requests for information,
        quotes or any other kind of request as indicated by the form's header.
      </Paragraph>
      <Paragraph>Personal Data collected: email address.</Paragraph>
      <Paragraph>
        The contact form uses EmailJS as a backend provider.
      </Paragraph>
      <Paragraph>
        Personal Data collected: various types of Data as specified in the
        privacy policy of the service.
      </Paragraph>
      <Paragraph>
        Place of processing: United States –
        <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank">
          Privacy Policy.
        </a>
      </Paragraph>

      <H4>Hosting and backend infrastructure</H4>
      <Paragraph>
        This type of service has the purpose of hosting Data and files that
        enable this Application to run and be distributed as well as to provide
        a ready-made infrastructure to run specific features or parts of this
        Application.
      </Paragraph>
      <Paragraph>
        Some services among those listed below, if any, may work through
        geographically distributed servers, making it difficult to determine the
        actual location where the Personal Data are stored.
      </Paragraph>
      <H5>GitHub Pages (GitHub Inc.)</H5>
      <Paragraph>
        GitHub Pages is a hosting service provided by GitHub, Inc.
      </Paragraph>
      <Paragraph>
        Personal Data collected: various types of Data as specified in the
        privacy policy of the service.
      </Paragraph>
      <Paragraph>
        Place of processing: United States –
        <a
          href="https://help.github.com/en/articles/github-privacy-statement"
          target="_blank"
        >
          Privacy Policy
        </a>
        . Privacy Shield participant.
      </Paragraph>
      <H5>Google Cloud Storage</H5>
      <Paragraph>
        Google Cloud Storage is a hosting service provided by Google LLC or by
        Google Ireland Limited, depending on the location this Application is
        accessed from.
      </Paragraph>
      <Paragraph>
        Personal Data collected: various types of Data as specified in the
        privacy policy of the service.
      </Paragraph>
      <Paragraph>
        Place of processing: United States –
        <a href="https://policies.google.com/privacy" target="_blank">
          Privacy Policy
        </a>
        ; Ireland –
        <a href="https://policies.google.com/privacy" target="_blank">
          Privacy Policy
        </a>
        . Privacy Shield participant.
      </Paragraph>

      <H4>Displaying content from external platforms</H4>
      <Paragraph>
        This type of service allows you to view content hosted on external
        platforms directly from the pages of this Application and interact with
        them.
      </Paragraph>
      <Paragraph>
        This type of service might still collect web traffic data for the pages
        where the service is installed, even when Users do not use it.
      </Paragraph>
      <H5>Google Fonts</H5>
      <Paragraph>
        Google Fonts is a typeface visualization service provided by Google LLC
        or by Google Ireland Limited, depending on the location this Application
        is accessed from, that allows this Application to incorporate content of
        this kind on its pages.
      </Paragraph>
      <Paragraph>
        Personal Data collected: Usage Data; various types of Data as specified
        in the privacy policy of the service.
      </Paragraph>
      <Paragraph>
        Place of processing: United States –
        <a href="https://policies.google.com/privacy" target="_blank">
          Privacy Policy
        </a>
        ; Ireland –
        <a href="https://policies.google.com/privacy" target="_blank">
          Privacy Policy
        </a>
        . Privacy Shield participant.
      </Paragraph>
      <H5>Font Awesome (Fonticons, Inc. )</H5>
      <Paragraph>
        Font Awesome is a typeface visualization service provided by Fonticons,
        Inc. that allows this Application to incorporate content of this kind on
        its pages.
      </Paragraph>
      <Paragraph>Personal Data collected: Usage Data.</Paragraph>
      <Paragraph>
        Place of processing: United States –
        <a href="https://fontawesome.com/privacy" target="_blank">
          Privacy Policy.
        </a>
      </Paragraph>

      <H3>The rights of Users</H3>
      <Paragraph>
        Users may exercise certain rights regarding their Data processed by the
        Owner.
      </Paragraph>
      <Paragraph>
        In particular, Users have the right to do the following:
      </Paragraph>
      <List>
        <ListItem>
          <Span>Withdraw their consent at any time. </Span>Users have the right
          to withdraw consent where they have previously given their consent to
          the processing of their Personal Data.
        </ListItem>
        <ListItem>
          <Span>Object to processing of their Data. </Span>Users have the right
          to object to the processing of their Data if the processing is carried
          out on a legal basis other than consent. Further details are provided
          in the dedicated section below.
        </ListItem>
        <ListItem>
          <Span>Access their Data. </Span>Users have the right to learn if Data
          is being processed by the Owner, obtain disclosure regarding certain
          aspects of the processing and obtain a copy of the Data undergoing
          processing. .
        </ListItem>
        <ListItem>
          <Span>Verify and seek rectification. </Span>Users have the right to
          verify the accuracy of their Data and ask for it to be updated or
          corrected. .
        </ListItem>
        <ListItem>
          <Span>Restrict the processing of their Data. </Span> Users have the
          right, under certain circumstances, to restrict the processing of
          their Data. In this case, the Owner will not process their Data for
          any purpose other than storing it.
        </ListItem>
        <ListItem>
          <Span>Have their Personal Data deleted or otherwise removed. </Span>
          Users have the right, under certain circumstances, to obtain the
          erasure of their Data from the Owner.
        </ListItem>
        <ListItem>
          <Span>
            Receive their Data and have it transferred to another controller.
          </Span>
          Users have the right to receive their Data in a structured, commonly
          used and machine readable format and, if technically feasible, to have
          it transmitted to another controller without any hindrance. This
          provision is applicable provided that the Data is processed by
          automated means and that the processing is based on the User's
          consent, on a contract which the User is part of or on pre-contractual
          obligations thereof.
        </ListItem>
        <ListItem>
          <Span>Lodge a complaint.</Span>Users have the right to bring a claim
          before their competent data protection authority.
        </ListItem>
      </List>
      <H4>Details about the right to object to processing</H4>
      <Paragraph>
        Where Personal Data is processed for a public interest, in the exercise
        of an official authority vested in the Owner or for the purposes of the
        legitimate interests pursued by the Owner, Users may object to such
        processing by providing a ground related to their particular situation
        to justify the objection.
      </Paragraph>
      <Paragraph>
        Users must know that, however, should their Personal Data be processed
        for direct marketing purposes, they can object to that processing at any
        time without providing any justification. To learn, whether the Owner is
        processing Personal Data for direct marketing purposes, Users may refer
        to the relevant sections of this document.
      </Paragraph>
      <H4>How to exercise these rights</H4>
      <Paragraph>
        Any requests to exercise User rights can be directed to the Owner
        through the contact details provided in this document. These requests
        can be exercised free of charge and will be addressed by the Owner as
        early as possible and always within one month.
      </Paragraph>
      <H3>Additional information about Data collection and processing</H3>
      <H4>Legal action</H4>
      <Paragraph>
        The User's Personal Data may be used for legal purposes by the Owner in
        Court or in the stages leading to possible legal action arising from
        improper use of this Application or the related Services.
      </Paragraph>
      <Paragraph>
        The User declares to be aware that the Owner may be required to reveal
        personal data upon request of public authorities.
      </Paragraph>
      <H4>Additional information about User's Personal Data</H4>
      <Paragraph>
        In addition to the information contained in this privacy policy, this
        Application may provide the User with additional and contextual
        information concerning particular Services or the collection and
        processing of Personal Data upon request.
      </Paragraph>
      <H4>System logs and maintenance</H4>
      <Paragraph>
        For operation and maintenance purposes, this Application and any
        third-party services may collect files that record interaction with this
        Application (System logs) use other Personal Data (such as the IP
        Address) for this purpose.
      </Paragraph>
      <H4>Information not contained in this policy</H4>
      <Paragraph>
        More details concerning the collection or processing of Personal Data
        may be requested from the Owner at any time. Please see the contact
        information at the beginning of this document.
      </Paragraph>
      <H4>How "Do Not Track" requests are handled</H4>
      <Paragraph>
        This Application does not support "Do Not Track" requests.
      </Paragraph>
      <Paragraph>
        To determine whether any of the third-party services it uses honor the
        "Do Not Track" requests, please read their privacy policies.
      </Paragraph>
      <H4>Changes to this privacy policy</H4>
      <Paragraph>
        The Owner reserves the right to make changes to this privacy policy at
        any time by giving notice to its Users on this page and possibly within
        this Application and/or - as far as technically and legally feasible -
        sending a notice to Users via any contact information available to the
        Owner. It is strongly recommended to check this page often, referring to
        the date of the last modification listed at the bottom.
      </Paragraph>

      <Paragraph>
        Should the changes affect processing activities performed on the basis
        of the User's consent, the Owner shall collect new consent from the
        User, where required.
      </Paragraph>

      <H3>Definitions and legal references</H3>
      <H5>Personal Data (or Data)</H5>
      <Paragraph>
        Any information that directly, indirectly, or in connection with other
        information — including a personal identification number — allows for
        the identification or identifiability of a natural person.
      </Paragraph>
      <H5>Usage Data</H5>
      <Paragraph>
        Information collected automatically through this Application (or
        third-party services employed in this Application), which can include:
        the IP addresses or domain names of the computers utilized by the Users
        who use this Application, the URI addresses (Uniform Resource
        Identifier), the time of the request, the method utilized to submit the
        request to the server, the size of the file received in response, the
        numerical code indicating the status of the server's answer (successful
        outcome, error, etc.), the country of origin, the features of the
        browser and the operating system utilized by the User, the various time
        details per visit (e.g., the time spent on each page within the
        Application) and the details about the path followed within the
        Application with special reference to the sequence of pages visited, and
        other parameters about the device operating system and/or the User's IT
        environment.
      </Paragraph>
      <H5>User</H5>
      <Paragraph>
        The individual using this Application who, unless otherwise specified,
        coincides with the Data Subject.
      </Paragraph>
      <H5>Data Subject</H5>
      <Paragraph>
        The natural person to whom the Personal Data refers.
      </Paragraph>
      <H5>Data Processor (or Data Supervisor)</H5>
      <Paragraph>
        The natural or legal person, public authority, agency or other body
        which processes Personal Data on behalf of the Controller, as described
        in this privacy policy.
      </Paragraph>
      <H5>Data Controller (or Owner)</H5>
      <Paragraph>
        The natural or legal person, public authority, agency or other body
        which, alone or jointly with others, determines the purposes and means
        of the processing of Personal Data, including the security measures
        concerning the operation and use of this Application. The Data
        Controller, unless otherwise specified, is the Owner of this
        Application.
      </Paragraph>
      <H5>This Application</H5>
      <Paragraph>
        The means by which the Personal Data of the User is collected and
        processed.
      </Paragraph>
      <H5>Service</H5>
      <Paragraph>
        The service provided by this Application as described in the relative
        terms (if available) and on this site/application.
      </Paragraph>
      <H5>European Union (or EU)</H5>
      <Paragraph>
        Unless otherwise specified, all references made within this document to
        the European Union include all current member states to the European
        Union and the European Economic Area.
      </Paragraph>
      <H5>Cookies</H5>
      <Paragraph>Small sets of data stored in the User's device.</Paragraph>
      <H5>Legal information</H5>
      <Paragraph>
        This privacy statement has been prepared based on provisions of multiple
        legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General
        Data Protection Regulation).
      </Paragraph>
      <Paragraph className="mb-[25px]">
        This privacy policy relates solely to this Application, if not stated
        otherwise within this document.
      </Paragraph>
    </div>
  );
};

export default PrivacyPolicy;
