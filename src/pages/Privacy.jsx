import React from "react";

function Privacy() {
  const sectionStyle = {
    fontFamily: "'Sora', sans-serif",
  };

  const h2Style = {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#1F4E79",
    marginTop: "2.5rem",
    marginBottom: "0.75rem",
  };

  const h3Style = {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "#1F4E79",
    marginTop: "1.5rem",
    marginBottom: "0.5rem",
  };

  const pStyle = {
    fontSize: "1rem",
    lineHeight: "1.75",
    color: "#333",
    marginBottom: "0.75rem",
    fontFamily: "'Roboto', serif",
  };

  const listStyle = {
    fontSize: "1rem",
    lineHeight: "1.75",
    color: "#333",
    marginBottom: "0.75rem",
    paddingLeft: "1.5rem",
    fontFamily: "'Roboto', serif",
  };

  return (
    <main
      style={{
        marginTop: "80px",
        backgroundColor: "#F5EFE7",
        minHeight: "calc(100vh - 80px)",
        textAlign: "left",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "4rem 2rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#1F4E79",
            marginBottom: "0.5rem",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ ...pStyle, color: "#666", fontSize: "0.875rem" }}>
          Last updated: August 5, 2026
        </p>

        <div style={sectionStyle}>
          <p style={pStyle}>
            Mill Pond Research, Inc. (&ldquo;Mill Pond Research,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates millpondresearch.com, xilos.ai, workbench.xilos.ai, and
            docs.xilos.ai (collectively, the &ldquo;Sites&rdquo;) and provides the Xilos
            AI governance platform, WorkBench AI workspace, Spotlight pricing
            tools, and related services (the &ldquo;Services&rdquo;). This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our Sites or use our Services.
          </p>
          <p style={pStyle}>
            By accessing the Sites or using the Services, you agree to the
            collection and use of information in accordance with this policy.
          </p>

          <h2 style={h2Style}>1. Information We Collect</h2>

          <h3 style={h3Style}>Information You Provide</h3>
          <ul style={listStyle}>
            <li>
              <strong>Account Information.</strong> When you register for Xilos or
              WorkBench, we collect your name, email address, organization name,
              and password (stored as a salted hash).
            </li>
            <li>
              <strong>Profile Information.</strong> You may optionally provide a
              profile photo, bio, and preferences.
            </li>
            <li>
              <strong>Content.</strong> Documents, spreadsheets, presentations,
              messages, agent configurations, and other content you create,
              upload, or process through the Services.
            </li>
            <li>
              <strong>Communications.</strong> When you contact us via the Sites,
              email, or other channels, we collect the contents of your
              messages and any attached information.
            </li>
            <li>
              <strong>Payment Information.</strong> If you subscribe to a paid plan,
              payment card details are processed by our third-party payment
              processor (Stripe). We do not store full card numbers.
            </li>
          </ul>

          <h3 style={h3Style}>Information Collected Automatically</h3>
          <ul style={listStyle}>
            <li>
              <strong>Usage Data.</strong> We collect information about how you
              interact with the Sites and Services, including pages visited,
              features used, query frequency, model routing data, and error
              logs.
            </li>
            <li>
              <strong>Device Information.</strong> IP address, browser type and
              version, operating system, device identifiers, and screen
              resolution.
            </li>
            <li>
              <strong>Cookies and Similar Technologies.</strong> We use essential
              cookies for authentication and session management, and analytics
              cookies (via Vercel Analytics) to understand usage patterns. You
              can control cookies through your browser settings.
            </li>
          </ul>

          <h3 style={h3Style}>Information from Integrations</h3>
          <p style={pStyle}>
            When you connect a third-party service (e.g., Slack, Google Drive,
            Microsoft 365, GitHub) to WorkBench, we collect access tokens,
            user identifiers, and metadata necessary to provide the
            integration. We do not store the content of your connected
            accounts beyond what is required for the integration to function.
          </p>

          <h2 style={h2Style}>2. How We Use Your Information</h2>
          <p style={pStyle}>We use the collected information to:</p>
          <ul style={listStyle}>
            <li>Provide, operate, and maintain the Sites and Services</li>
            <li>Process and route AI model requests through the Xilos gateway</li>
            <li>Improve, personalize, and develop new features</li>
            <li>Communicate with you about account updates, security alerts, and support</li>
            <li>Monitor usage for security, fraud prevention, and compliance</li>
            <li>Aggregate anonymized data for analytics and product improvement</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 style={h2Style}>3. AI Model Data Handling</h2>
          <p style={pStyle}>
            Xilos is an AI gateway that routes requests to third-party LLM
            providers (e.g., OpenAI, Anthropic, Google, Groq) based on your
            organization&rsquo;s configured policies. When you send a prompt through
            Xilos:
          </p>
          <ul style={listStyle}>
            <li>
              Your request is forwarded to the configured provider for inference
              only. We do not use your prompts or responses to train or fine-tune
              models unless you explicitly opt in.
            </li>
            <li>
              Request and response metadata (model used, token count, latency)
              is logged for billing, analytics, and audit purposes.
            </li>
            <li>
              You can configure data retention policies per organization. By
              default, request logs are retained for 90 days.
            </li>
            <li>
              WorkBench&rsquo;s AI features (chat, document generation, spreadsheet
              analysis) route through Xilos under the same policies. No
              WorkBench content is sent directly to third-party providers
              without passing through the Xilos gateway.
            </li>
          </ul>

          <h2 style={h2Style}>4. How We Share Your Information</h2>
          <p style={pStyle}>We do not sell your personal information. We may share information with:</p>
          <ul style={listStyle}>
            <li>
              <strong>Service Providers.</strong> Third-party vendors who provide
              infrastructure (Vercel, Railway, Neon), payment processing
              (Stripe), email delivery (Resend), and AI model inference
              (OpenAI, Anthropic, Google, Groq, and other providers you
              configure). These providers process data under contractual
              obligations to protect it.
            </li>
            <li>
              <strong>Organizational Access.</strong> If you use Xilos or WorkBench
              as part of an organization, your organization&rsquo;s administrators
              may access content and usage data within that organization.
            </li>
            <li>
              <strong>Legal Requirements.</strong> We may disclose information if
              required by law, legal process, or governmental request, or to
              protect our rights, property, or safety.
            </li>
            <li>
              <strong>Business Transfers.</strong> In connection with a merger,
              acquisition, or sale of assets, your information may be
              transferred as part of that transaction.
            </li>
          </ul>

          <h2 style={h2Style}>5. Data Security</h2>
          <p style={pStyle}>
            We implement industry-standard security measures to protect your
            data, including encryption in transit (TLS 1.3) and at rest
            (AES-256), access controls, audit logging, and regular security
            assessments. However, no method of electronic storage or
            transmission is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2 style={h2Style}>6. Data Retention</h2>
          <p style={pStyle}>
            We retain your information for as long as your account is active or
            as needed to provide the Services. You can request deletion of your
            account and associated data by contacting us. When you delete
            content from WorkBench, it is removed from our active systems
            within 30 days and from backups within 90 days.
          </p>

          <h2 style={h2Style}>7. Your Rights and Choices</h2>
          <p style={pStyle}>Depending on your jurisdiction, you may have the right to:</p>
          <ul style={listStyle}>
            <li><strong>Access</strong> the personal data we hold about you</li>
            <li><strong>Correct</strong> inaccurate or incomplete data</li>
            <li><strong>Delete</strong> your personal data</li>
            <li><strong>Export</strong> your data in a portable format</li>
            <li><strong>Object to</strong> or <strong>restrict</strong> certain processing</li>
            <li><strong>Withdraw consent</strong> at any time (where processing is based on consent)</li>
          </ul>
          <p style={pStyle}>
            To exercise these rights, contact us at privacy@millpondresearch.com.
            We will respond to your request within 30 days.
          </p>

          <h2 style={h2Style}>8. International Data Transfers</h2>
          <p style={pStyle}>
            Your information may be transferred to and processed in the United
            States and other countries where our service providers operate. When
            we transfer data from the European Economic Area (EEA), Switzerland,
            or the United Kingdom, we use Standard Contractual Clauses or other
            appropriate safeguards.
          </p>

          <h2 style={h2Style}>9. Children&rsquo;s Privacy</h2>
          <p style={pStyle}>
            The Sites and Services are not directed to individuals under 16. We
            do not knowingly collect personal information from children. If we
            become aware that a child has provided us with personal data, we
            will delete it.
          </p>

          <h2 style={h2Style}>10. Third-Party Links</h2>
          <p style={pStyle}>
            The Sites and Services may contain links to third-party websites or
            services (e.g., GitHub, Slack, Google). We are not responsible for
            the privacy practices of these third parties. We encourage you to
            review their privacy policies before providing any information.
          </p>

          <h2 style={h2Style}>11. Changes to This Policy</h2>
          <p style={pStyle}>
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by posting the updated policy on the Sites
            and, where appropriate, by email. Your continued use of the Sites
            or Services after the changes take effect constitutes acceptance
            of the updated policy.
          </p>

          <h2 style={h2Style}>12. Contact</h2>
          <p style={pStyle}>
            If you have questions, concerns, or requests regarding this Privacy
            Policy, please contact us:
          </p>
          <p style={pStyle}>
            Email: privacy@millpondresearch.com
            <br />
            Mill Pond Research, Inc.
            <br />
            Austin, TX
          </p>
        </div>
      </div>
    </main>
  );
}

export default Privacy;
